import * as React from 'react';
import { UserAuthView } from './user-auth.view';
import { UserContext } from 'context/user-context';
import firebase from '../../lib/firebase-client';

//@ts-ignore
import userDefaultImage from '/images/default/user.png';

export const UserAuthContainer = () => {
	const user = React.useContext(UserContext);
	const signout = () => {
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
