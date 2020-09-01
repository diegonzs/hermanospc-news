//@ts-nocheck
const { createApolloFetch } = require('apollo-fetch');
const { gql } = require('@apollo/client');

export default async (req, res) => {
	if (req.method === 'POST') {
		const { id, email, username } = JSON.parse(req.body);

		const apolloFetch = createApolloFetch({
			uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
		});

		apolloFetch.use(({ request, options }, next) => {
			if (!options.headers) {
				options.headers = {}; // Create the headers object if needed.
			}
			options.headers['x-hasura-admin-secret'] = process.env.HASURA_ADMIN_KEY;
			next();
		});

		const CREATE_USER = `
			mutation CREATE_USER($id: String, $email: String, $username: String) {
				insert_users(objects: { id: $id, email: $email, username: $username }) {
					returning {
						id
					}
				}
			}
		`;

		try {
			const createdUserResopnse = await apolloFetch({
				query: CREATE_USER,
				variables: { id, email, username },
			});

			res.statusCode = 200;
			res.json({ createdUserResopnse });
		} catch (error) {
			console.log(error);
			res.statusCode = 200;
			res.json({ error });
		}
	}
};
