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

export const FETCH_USER_SOURCES = gql`
	query FETCH_USER_SOURCCES($userId: String) {
		users_sources(where: { user_id: { _eq: $userId } }) {
			source_id
			links_source {
				slug
			}
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
