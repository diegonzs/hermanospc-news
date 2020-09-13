import firebaseAdmin from 'lib/firebase-admin';
import { FETCH_USER_SOURCES_NOTIFICATIONS } from 'graphql/queries/sources';

export default async (req, res) => {
	if (req.method === 'POST') {
		const admin = await firebaseAdmin();
		const { topics, token, userId } = JSON.parse(req.body);

		let realTopics;

		if (userId) {
			const response = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-hasura-admin-secret': process.env.HASURA_ADMIN_KEY,
				},
				body: JSON.stringify({
					query: FETCH_USER_SOURCES_NOTIFICATIONS(userId),
				}),
			});
			const parseResponse = await response.json();
			if (parseResponse.data && parseResponse.data.users_sources) {
				console.log('there are sources :)', parseResponse.data.users_sources);
				realTopics = parseResponse.data.users_sources.map(
					(elem) => elem.links_source.slug
				);
			}
		} else {
			realTopics = topics;
		}

		const tokens = [token];

		for (const topic of realTopics) {
			await admin.messaging().subscribeToTopic(tokens, topic);
		}

		res.statusCode = 200;
		res.json({ topics, token });
	}

	if (req.method === 'DELETE') {
		const admin = await firebaseAdmin();
		const { topics, token } = JSON.parse(req.body);

		const tokens = [token];

		for (const topic of topics) {
			await admin.messaging().unsubscribeFromTopic(tokens, topic);
		}

		res.statusCode = 200;
		res.json({ message: 'Removed Source' });
	}
};
