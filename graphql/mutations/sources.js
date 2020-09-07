import { gql } from '@apollo/client';

export const SUBSCRIBE_TO_SOURCES = gql`
	mutation SUBSCRIBE_TO_SORUCES($sources: [users_sources_insert_input!]!) {
		insert_users_sources(objects: $sources) {
			returning {
				links_source {
					slug
				}
			}
		}
	}
`;

export const UNSUBSCRIBE_TO_SOURCE = gql`
	mutation UNSUBSCRIBE_TO_SOURCE($userId: String, $sourceId: uuid) {
		delete_users_sources(
			where: { user_id: { _eq: $userId }, source_id: { _eq: $sourceId } }
		) {
			returning {
				source_id
				links_source {
					slug
				}
			}
		}
	}
`;

/**
 * Variables for unsubsribe
 * @param {string} userId - User ID
 * @param {string} sourceId - Source ID
 */
export const UNSUBSCRIBE_TO_SOURCE_VARIABLES = (userId, sourceId) => ({
	userId,
	sourceId,
});
