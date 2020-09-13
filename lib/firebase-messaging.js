import firebase from 'lib/firebase-client';
import { toast } from 'react-toastify';

export const getFCMToken = () => {
	return localStorage.getItem('fcm_token');
};

export const initMessaging = async () => {
	try {
		// if (getFCMToken() !== null) {
		// 	return false;
		// }
		const messaging = firebase.messaging();
		await messaging.requestPermission();
		const token = await messaging.getToken();

		localStorage.setItem('fcm_token', token);
	} catch (error) {
		console.error(error);
	}
};

export const renewToken = async () => {
	const messaging = firebase.messaging();
	const token = await messaging.getToken();
	localStorage.setItem('fcm_token', token);
	return token;
};

/**
 *
 * @param {string[]} topics
 * @param {string} [toastText]
 */
export const unsubscribeFromTopics = async (topics, toastText) => {
	const token = await renewToken();
	if (token) {
		if (toastText) {
			toast(toastText, {
				type: 'success',
			});
		}
		try {
			fetch('/api/fcm-register-topic', {
				method: 'DELETE',
				body: JSON.stringify({
					token,
					topics,
				}),
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
};

/**
 *
 * @param {string[]} topics
 * @param {string} [toastText]
 */
export const subscribeToTopics = async (topics, toastText) => {
	await initMessaging();
	const token = getFCMToken();
	if (token) {
		if (toastText) {
			toast(toastText, {
				type: 'success',
			});
		}
		try {
			fetch('/api/fcm-register-topic', {
				method: 'POST',
				body: JSON.stringify({
					token,
					topics,
				}),
			});
		} catch (error) {
			console.log({ error });
		}
	} else {
		return;
	}
};
