// @ts-nocheck
import * as admin from 'firebase-admin';

const firebaseAdmin = () => {
	if (!admin.apps.length) {
		admin.initializeApp(
			{
				credential: admin.credential.cert(require('../credentials/server')),
			},
			'server'
		);
	}

	return admin.app('server');
};

export default firebaseAdmin;
