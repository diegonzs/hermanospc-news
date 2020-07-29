import { gql } from '@apollo/client';

/**
 * Mutation use to save a link.
 */
export const CREATE_REACTION = gql`
	mutation CREATE_REACTION($userId: String, $linkId: uuid, $emoji: String) {
		insert_reactions(
			objects: { link_id: $linkId, user_id: $userId, emoji: $emoji }
		) {
			returning {
				id
				emoji
			}
		}
	}
`;

/**
 * Function use to return save_link variables
 * @param {string} userId - Indicates the user id
 * @param {string} linkId - indicates the link id
 * @param {string} emoji - indicates the code of the reaction
 */
export const CREATE_REACTION_VARIABLES = (userId, linkId, emoji) => ({
	userId,
	linkId,
	emoji,
});
