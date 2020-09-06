import firebaseAdmin from 'lib/firebase-admin';

export default async (req, res) => {
	if (req.method === 'POST') {
		const admin = await firebaseAdmin();
		const { topics, token } = JSON.parse(req.body);

		const tokens = [token];

		for (const topic of topics) {
			console.log('subscribing to this topic:', topic);
			const data = await admin.messaging().subscribeToTopic(tokens, topic);
			console.log(data);
		}

		res.statusCode = 200;
		res.json({ topics, token });
	}
};
