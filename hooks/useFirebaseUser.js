import { useState, useEffect } from 'react';
import firebase from 'lib/firebase-client';
import { isFirstTimeVar } from 'lib/apollo-client';

export const useFirebaseUser = (initialUser, setToken) => {
	const [finalUser, setFinalUser] = useState(initialUser);

	useEffect(() => {
		return firebase.auth().onIdTokenChanged(async (user) => {
			// If user
			if (user) {
				const userData = {
					email: user.email,
					uid: user.uid,
				};
				// Get the firebase token from the user.
				const token = await user.getIdToken();
				const idTokenResult = await user.getIdTokenResult();

				// Get the hasura custom claims from the firebase token.
				const hasuraClaim =
					idTokenResult.claims['https://hasura.io/jwt/claims'];

				// Check if the firebase user already have the hasura custom claims.
				if (hasuraClaim) {
					// Set the user.
					setFinalUser({
						...userData,
						token,
					});

					// Set current token
					setToken(token);

					// Set first time variable to true to show de onboarding
					isFirstTimeVar(false);

					// Create the user session in the backend.
					fetch('/api/login', {
						method: 'POST',
						// eslint-disable-next-line no-undef
						headers: new Headers({ 'Content-Type': 'application/json' }),
						credentials: 'same-origin',
						body: JSON.stringify({ token }),
					});
				} else {
					// Update de token in firebase to add Hasura claims.
					await fetch('/api/process-signup', {
						method: 'POST',
						body: JSON.stringify({
							userId: userData.uid,
						}),
					});

					// Force refresh to pick up the latest custom claims changes.
					const newToken = await user.getIdToken(true);

					// refresh the token in the session backend
					fetch('/api/login', {
						method: 'POST',
						// eslint-disable-next-line no-undef
						headers: new Headers({ 'Content-Type': 'application/json' }),
						credentials: 'same-origin',
						body: JSON.stringify({ token: newToken }),
					});

					// Generate a random number to use in the username.
					const randomNumber = Math.floor(1000 + Math.random() * 9000);
					// Get the section of the email before the @ to use in the username.
					const userNameFromEmail = user.email.split('@')[0].replace('.', '');
					// Create the autogenerated username.
					userData.username = `${userNameFromEmail}${randomNumber}`;

					// Set the user
					setFinalUser({
						...userData,
						token: newToken,
					});

					// Set current token
					setToken(newToken);

					// Set first time variable to true to show de onboarding
					isFirstTimeVar(true);

					// Insert the user in the DB.
					fetch('/api/create-user-db', {
						method: 'POST',
						body: JSON.stringify({
							id: userData.uid,
							email: userData.email,
							username: userData.email,
						}),
					});
				}
			} else {
				// Set the user to null
				setFinalUser(null);
				// Set the current token to null
				setToken(null);
				// call log out on the backend to delete the session
				fetch('/api/logout', {
					method: 'POST',
					credentials: 'same-origin',
				});
			}
		});
	}, []);

	return finalUser;
};
