import * as React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SUBSCRIBE_TO_SOURCES } from 'graphql/mutations/sources';
import {
	ALL_CATEGORIES_QUERY_WITH_USER,
	ALL_CATEGORIES_QUERY_VARIABLES,
} from 'graphql/queries/categories';
import { isFirstTimeVar } from 'lib/apollo-client';
import { FETCH_ALL_SOURCES } from 'graphql/queries/sources';
import { Loader } from 'components/loader';
import { ToggleSwitch } from 'components/toggle-switch';

//@ts-ignore
import styles from './source-selection.module.scss';
import { Button } from 'components/button';
import { initMessaging, getFCMToken } from 'lib/firebase-messaging';
import { setSources } from 'lib/local-storage-util';

export const SourcesSelection = ({ userId }) => {
	const [selectedSources, setSelectedSources] = React.useState([]);

	const sourcesResponse = useQuery(FETCH_ALL_SOURCES);

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

	const callApi = (sources, token) => {
		try {
			fetch('/api/fcm-register-topic', {
				method: 'POST',
				body: JSON.stringify({
					token,
					topics: sources,
				}),
			});
		} catch (error) {
			console.log({ error });
		}
	};

	const [subscribe, { loading }] = useMutation(SUBSCRIBE_TO_SOURCES, {
		variables: {
			sources: selectedSources.map((elem) => ({
				user_id: userId,
				source_id: elem,
			})),
		},
		refetchQueries: [
			{
				query: ALL_CATEGORIES_QUERY_WITH_USER,
				variables: ALL_CATEGORIES_QUERY_VARIABLES(userId),
			},
		],
		onCompleted: async (data) => {
			isFirstTimeVar(false);
			let token = getFCMToken();
			const sources = data.insert_users_sources.returning.map(
				(source) => source.links_source.slug
			);
			setSources(sources);
			if (token) {
				callApi(sources, token);
			} else {
				await initMessaging();
				token = getFCMToken();
				if (token) {
					callApi(sources, token);
				}
			}
		},
	});

	return (
		<div className={styles.container}>
			<h1>Welcome to News!</h1>
			<p className={styles.description}>
				Tell us what sources do you want to see in your news feed. You can
				change this later any time. If you don't see your favorite source
				contact us to add it.
			</p>
			{sourcesResponse.loading && <Loader />}
			<ul className={styles.sourcesList}>
				{sourcesResponse.data &&
					sourcesResponse.data.links_sources &&
					sourcesResponse.data.links_sources.map((source) => (
						<li
							onClick={() => onClickSource(source.id)}
							className={styles.sourceElem}
						>
							<span className={styles.content}>
								<img className={styles.favicon} src={source.favicon} />
								{source.name}
							</span>{' '}
							<ToggleSwitch
								isActive={selectedSources.includes(source.id)}
								onClickHandler={() => onClickSource(source.id)}
							/>
						</li>
					))}
			</ul>
			<Button
				text="Continue"
				onClickHandler={() => subscribe()}
				isDisabled={!selectedSources.length || loading}
			/>
		</div>
	);
};
