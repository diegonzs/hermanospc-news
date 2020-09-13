import * as React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import { NotificationOption } from '../notification-option';
import { Row } from 'components/row';

//@ts-ignore
import bellIcon from '/images/icons/bell.png';

//@ts-ignore
import styles from './notification-settings.module.scss';

import { Button } from 'components/button';
import { SourcesSelection } from 'components/sources-selection';
import { UserContext } from 'context';
import { useMutation } from '@apollo/client';
import {
	UNSUBSCRIBE_TO_SOURCE,
	UNSUBSCRIBE_TO_SOURCE_VARIABLES,
	TOGGLE_SOURCE_NOTIFICATION,
	TOGGLE_SOURCE_NOTIFICATION_VARIABLES,
} from 'graphql/mutations/sources';
import {
	FETCH_ALL_SOURCES_VARIABLES,
	FETCH_USER_SOURCES,
} from 'graphql/queries/sources';
import { ToastContainer, toast } from 'react-toastify';
import {
	unsubscribeFromTopics,
	subscribeToTopics,
} from 'lib/firebase-messaging';
import {
	ALL_CATEGORIES_QUERY_WITH_USER,
	ALL_CATEGORIES_QUERY_VARIABLES,
} from 'graphql/queries/categories';

/**
 * This component shows all the visual for notification settings
 * @param {NotificationSettingsProps} props
 */
export const NotificationSettings = ({
	settings,
	updateSettings,
	userSources,
}) => {
	const [showSourcesList, setShowSourcesList] = React.useState(false);
	const user = React.useContext(UserContext);

	const [unsubscribe] = useMutation(UNSUBSCRIBE_TO_SOURCE, {
		onCompleted: async (data) => {
			if (!data) {
				return;
			}
			toast('Source removed', {
				type: 'success',
			});
			const topic = data.delete_users_sources.returning[0].links_source.slug;
			await unsubscribeFromTopics([topic]);
		},
	});

	const [toggleNotification] = useMutation(TOGGLE_SOURCE_NOTIFICATION, {
		onCompleted: async (data) => {
			if (!data) {
				return;
			}
			const topic = data.update_users_sources.returning[0].links_source.slug;
			const name = data.update_users_sources.returning[0].links_source.name;
			if (data.update_users_sources.returning[0].is_notification_on) {
				await subscribeToTopics([topic], `Added notifications for ${name}`);
			} else {
				await unsubscribeFromTopics(
					[topic],
					`Removed notifications from ${name}`
				);
			}
		},
	});

	const onlyBellClick = ({ id, slug, value, source }) => {
		toggleNotification({
			variables: TOGGLE_SOURCE_NOTIFICATION_VARIABLES(id, value),
			optimisticResponse: {
				update_users_sources: {
					__typename: 'users_sources_mutation_response',
					returning: [
						{
							__typename: 'users_sources',
							id,
							is_notification_on: value,
							links_source: {
								id: source.id,
								name: source.name,
								favicon: source.favicon,
								slug,
							},
						},
					],
				},
			},
			update: async (store) => {
				store.modify({
					id: `users_sources:${id}`,
					fields: {
						is_notifications_on: value,
					},
				});
			},
		});
	};

	const onClickSource = (id) => {
		unsubscribe({
			variables: UNSUBSCRIBE_TO_SOURCE_VARIABLES(user ? user.uid : '', id),
			refetchQueries: [
				{
					query: ALL_CATEGORIES_QUERY_WITH_USER,
					variables: ALL_CATEGORIES_QUERY_VARIABLES(user ? user.uid : ''),
				},
			],
			optimisticResponse: {
				delete_users_sources: {
					returning: [
						{
							source_id: id,
							links_source: {
								slug: '',
							},
							__typename: 'users_sources',
						},
					],
					__typename: 'users_sources_mutation_response',
				},
			},
			update: async (store, { data }) => {
				store.writeQuery({
					query: FETCH_USER_SOURCES,
					variables: FETCH_ALL_SOURCES_VARIABLES(user ? user.uid : ''),
					data: {
						users_sources: userSources.filter((elem) => elem.source_id !== id),
					},
				});
			},
		});
	};

	return (
		<div className={styles.container}>
			<Row isGrid={true} gap="24">
				<p className={styles.title}>Notifications</p>
				<picture className={styles.icon}>
					<img src={bellIcon} alt="bell" />
				</picture>
			</Row>
			<div className={styles.notificationList}>
				{settings.map((s) => (
					<NotificationOption
						key={s.id}
						id={s.id}
						isActive={s.isActive}
						title={s.title}
						description={s.description}
						updateSettings={() => updateSettings(s.id)}
					/>
				))}
			</div>
			<Row isGrid={true} gap="24">
				<p className={styles.title}>Manage Sources</p>
			</Row>
			<ul className={styles.sourcesList}>
				{userSources &&
					userSources.map((sourceElem) => {
						const source = sourceElem.links_source;
						return (
							<li key={source.name} className={styles.sourceElem}>
								<span className={styles.content}>
									<img className={styles.favicon} src={source.favicon} />
									{source.name}
								</span>
								<div className={styles.actionsContainer}>
									<span
										onClick={() => onClickSource(source.id)}
										className={styles.unFollowingTag}
									>
										UNFOLLOW
									</span>
									<span
										className={styles.notificationIconContainer}
										onClick={() =>
											onlyBellClick({
												id: sourceElem.id,
												slug: source.slug,
												value: !sourceElem.is_notification_on,
												source,
											})
										}
									>
										{sourceElem.is_notification_on ? (
											<SVG
												className={styles.notificationIcon}
												src="/images/svgs/icon-notification-on.svg"
											/>
										) : (
											<SVG
												className={styles.notificationIcon}
												src="/images/svgs/icon-notification-off.svg"
											/>
										)}
									</span>
								</div>
							</li>
						);
					})}
			</ul>
			<Button text="Add More" onClickHandler={() => setShowSourcesList(true)} />
			<ToastContainer position="bottom-center" />
			{showSourcesList && (
				<SourcesSelection
					userId={user.uid}
					onDone={() => setShowSourcesList(false)}
					title="List of news sources"
					description="Pick your favorites"
				/>
			)}
		</div>
	);
};

NotificationSettings.propTypes = {
	/** List of settings. */
	settings: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			isActive: PropTypes.bool.isRequired,
		})
	).isRequired,
	/** Function to update setting's state. */
	updateSettings: PropTypes.func.isRequired,
};
