import { gql } from '@apollo/client';

/**
 * Mutation use to save a link.
 */
export const SAVE_LINK = gql`
	mutation SAVE_LINK($userId: String, $linkId: uuid) {
		insert_links_saved(objects: { link_id: $linkId, user_id: $userId }) {
			returning {
				id
			}
		}
	}
`;

/**
 * Function use to return save_link variables
 * @param {string} userId - Indicates the user id
 * @param {string} linkId - indicates the link id
 */
export const SAVE_LINK_VARIABLES = (userId, linkId) => ({
	userId,
	linkId,
});
