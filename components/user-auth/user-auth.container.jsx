import * as React from 'react';
import { UserAuthView } from './user-auth.view';
import { UserContext } from 'context/user-context';
import firebase from '../../lib/firebase-client';

//@ts-ignore
import userDefaultImage from '/images/default/user.png';
import { useQuery } from '@apollo/client';
import {
	FETCH_ALL_SOURCES_VARIABLES,
	FETCH_ALL_SOURCES,
} from 'graphql/queries/sources';
import { unsubscribeFromTopics } from 'lib/firebase-messaging';

export const UserAuthContainer = () => {
	const user = React.useContext(UserContext);

	const { data, loading } = useQuery(FETCH_ALL_SOURCES, {
		variables: FETCH_ALL_SOURCES_VARIABLES(user ? user.uid : ''),
	});

	const signout = () => {
		if (loading) return;
		if (data && data.links_sources) {
			const topics = data.links_sources.map((source) => source.slug);
			unsubscribeFromTopics(topics);
		}
		firebase.auth().signOut();
	};

	return (
		<UserAuthView
			userData={{
				username: 'diegonzs',
				avatar: userDefaultImage,
				signout: () => {
					signout();
				},
			}}
			isUserSignedIn={!!(user && user.uid)}
		/>
	);
};
