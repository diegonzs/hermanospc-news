import { gql } from '@apollo/client';
import { FRAGMENT_LINKS_ALL_FIELDS } from 'graphql/fragments/links';

/**
 * QUery to fetch all links saved by an user.
 */
export const ALL_FAVORITE_LINKS = gql`
	query ALL_FAVORITE_LINKS($userId: String, $offset: Int, $limit: Int) {
		favorite_links: links(
			where: {
				reactions: { user_id: { _eq: $userId }, emoji: { _eq: "U+1F44D" } }
			}
			limit: $limit
			offset: $offset
		) {
			...LinksAllFields
		}
		favorite_links_aggregate: links_aggregate(
			where: {
				reactions: { user_id: { _eq: $userId }, emoji: { _eq: "U+1F44D" } }
			}
		) {
			aggregate {
				count
			}
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Variables ALl links saved query
 * @param {string} userId
 * @param {number} offset
 * @param {number} limit
 */
export const ALL_FAVORITE_LINKS_VARIABLES = (userId, offset, limit) => ({
	userId,
	offset,
	limit,
});
