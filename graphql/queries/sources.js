import { gql } from '@apollo/client';

export const FETCH_ALL_SOURCES = gql`
	query FETCH_ALL_SOURCES($userId: String) {
		links_sources {
			slug
			name
			id
			favicon
		}
		users_sources(where: { user_id: { _eq: $userId } }) {
			source_id
		}
	}
`;

/**
 * Variables for query FETCH_ALL_SOURCES
 * @param {string} userId
 */
export const FETCH_ALL_SOURCES_VARIABLES = (userId) => ({
	userId,
});
