import firebase from 'lib/firebase-client';

export const getFCMToken = () => {
	return localStorage.getItem('fcm_token');
};

export const initMessaging = async () => {
	try {
		if (getFCMToken() !== null) {
			return false;
		}
		const messaging = firebase.messaging();
		await messaging.requestPermission();
		const token = await messaging.getToken();

		localStorage.setItem('fcm_token', token);
	} catch (error) {
		console.error(error);
	}
};
