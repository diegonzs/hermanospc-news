import * as React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SUBSCRIBE_TO_SOURCES } from 'graphql/mutations/sources';
import {
	ALL_CATEGORIES_QUERY_WITH_USER,
	ALL_CATEGORIES_QUERY_VARIABLES,
} from 'graphql/queries/categories';
import { isFirstTimeVar } from 'lib/apollo-client';
import {
	FETCH_ALL_SOURCES,
	FETCH_ALL_SOURCES_VARIABLES,
	FETCH_USER_SOURCES,
} from 'graphql/queries/sources';
import { Loader } from 'components/loader';
import { ToggleSwitch } from 'components/toggle-switch';

//@ts-ignore
import styles from './source-selection.module.scss';
import { Button } from 'components/button';
import { subscribeToTopics } from 'lib/firebase-messaging';

/**
 *
 * @typedef {Object} SourcesSelectionProps
 * @property {string} userId
 * @property {string} title
 * @property {string} description
 * @property {() => void} [onDone]
 */

/**
 * Component use to select news sources
 * @param {SourcesSelectionProps} props
 */
export const SourcesSelection = ({ userId, title, description, onDone }) => {
	const [selectedSources, setSelectedSources] = React.useState([]);

	const sourcesResponse = useQuery(FETCH_ALL_SOURCES, {
		variables: FETCH_ALL_SOURCES_VARIABLES(userId),
		fetchPolicy: 'network-only',
	});

	const isSourceDisabled = (id) => {
		const index = sourcesResponse.data.users_sources.findIndex(
			(elem) => id === elem.source_id
		);
		if (index > -1) {
			return true;
		}
	};

	const onClickSource = (value) => {
		const selectedIndex = selectedSources.findIndex(
			(source) => source === value
		);
		if (selectedIndex > -1) {
			setSelectedSources([
				...selectedSources.slice(0, selectedIndex),
				...selectedSources.slice(selectedIndex + 1),
			]);
		} else {
			setSelectedSources([...selectedSources, value]);
		}
	};

	const [subscribe, { loading }] = useMutation(SUBSCRIBE_TO_SOURCES, {
		variables: {
			sources: selectedSources.map((elem) => ({
				user_id: userId,
				source_id: elem,
				is_notification_on: true,
			})),
		},
		refetchQueries: [
			{
				query: ALL_CATEGORIES_QUERY_WITH_USER,
				variables: ALL_CATEGORIES_QUERY_VARIABLES(userId),
			},
			{
				query: FETCH_USER_SOURCES,
				variables: FETCH_ALL_SOURCES_VARIABLES(userId),
			},
		],
		onCompleted: async (data) => {
			isFirstTimeVar(false);
			const topics = data.insert_users_sources.returning.map(
				(source) => source.links_source.slug
			);
			subscribeToTopics(topics);
			if (onDone) {
				onDone();
			}
		},
	});

	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<p className={styles.description}>{description}</p>
			{sourcesResponse.loading && <Loader />}
			<ul className={styles.sourcesList}>
				{sourcesResponse.data &&
					sourcesResponse.data.links_sources &&
					sourcesResponse.data.links_sources.map((source) => {
						const isDisabled = isSourceDisabled(source.id);
						return (
							<li
								key={source.name}
								onClick={() => (isDisabled ? null : onClickSource(source.id))}
								className={`${styles.sourceElem} ${
									isDisabled ? styles.disabled : ''
								}`}
							>
								<span className={styles.content}>
									<img className={styles.favicon} src={source.favicon} />
									{source.name}
								</span>{' '}
								{isDisabled ? (
									<span className={styles.followingTag}>FOLLOWING</span>
								) : (
									<ToggleSwitch
										isActive={
											!!(selectedSources.includes(source.id) || isDisabled)
										}
										onClickHandler={() =>
											isDisabled ? null : onClickSource(source.id)
										}
										isDisabled={isDisabled}
									/>
								)}
							</li>
						);
					})}
			</ul>
			<div className={styles.buttonContainer}>
				{!!onDone && (
					<Button
						text="Cancel"
						onClickHandler={() => onDone()}
						isFilled={false}
					/>
				)}
				<Button
					text="Continue"
					onClickHandler={() => subscribe()}
					isDisabled={!selectedSources.length || loading}
				/>
			</div>
		</div>
	);
};
