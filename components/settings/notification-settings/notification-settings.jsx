import * as React from 'react';
import PropTypes from 'prop-types';
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
} from 'graphql/mutations/sources';
import {
	FETCH_ALL_SOURCES,
	FETCH_ALL_SOURCES_VARIABLES,
	FETCH_USER_SOURCES,
} from 'graphql/queries/sources';
import { ToastContainer, toast } from 'react-toastify';
import { getFCMToken, initMessaging } from 'lib/firebase-messaging';

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
			const topic = data.delete_users_sources.returning[0].links_source.slug;
			const token = getFCMToken();
			if (token) {
				try {
					await fetch('/api/fcm-register-topic', {
						method: 'DELETE',
						body: JSON.stringify({
							token,
							topic,
						}),
					});
					toast('Source removed', {
						type: 'success',
					});
				} catch (error) {
					console.log({ error });
					toast('An error happened', {
						type: 'error',
					});
				}
			} else {
				return;
			}
		},
	});

	const onClickSource = (id) => {
		unsubscribe({
			variables: UNSUBSCRIBE_TO_SOURCE_VARIABLES(user ? user.uid : '', id),
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
				<p className={styles.title}>News Sources</p>
				{/* <picture className={styles.icon}>
					<img src={bellIcon} alt="bell" />
				</picture> */}
			</Row>
			<ul className={styles.sourcesList}>
				{userSources &&
					userSources.map((sourceElem) => {
						const source = sourceElem.links_source;
						return (
							<li
								key={source.name}
								onClick={() => onClickSource(source.id)}
								className={`${styles.sourceElem}`}
							>
								<span className={styles.content}>
									<img className={styles.favicon} src={source.favicon} />
									{source.name}
								</span>{' '}
								<span className={styles.unFollowingTag}>UNFOLLOW</span>
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
