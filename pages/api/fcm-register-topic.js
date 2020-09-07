import firebaseAdmin from 'lib/firebase-admin';

export default async (req, res) => {
	if (req.method === 'POST') {
		const admin = await firebaseAdmin();
		const { topics, token } = JSON.parse(req.body);

		const tokens = [token];

		for (const topic of topics) {
			await admin.messaging().subscribeToTopic(tokens, topic);
		}

		res.statusCode = 200;
		res.json({ topics, token });
	}
	if (req.method === 'DELETE') {
		const admin = await firebaseAdmin();
		const { topic, token } = JSON.parse(req.body);

		const tokens = [token];

		await admin.messaging().unsubscribeFromTopic(tokens, topic);

		res.statusCode = 200;
		res.json({ message: 'Removed Source' });
	}
};
