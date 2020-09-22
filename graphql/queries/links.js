import { gql } from '@apollo/client';
import { FRAGMENT_LINKS_ALL_FIELDS } from '../fragments/links';

export const GET_LINK_BY_ID_SEO = (id) => `
	query MyQuery {
		links_by_pk(id: "${id}") {
			id
			image
			cloudinary_id
			original_link
			title
			created_at
			content
			source {
				name
				favicon
			}
			tags
			category {
				slug
			}
			reactions(where: { user_id: { _eq: "1321323" } }) {
				id
				emoji
			}
			likes: reactions_aggregate(where: { emoji: { _eq: "U+1F44D" } }) {
				aggregate {
					count
				}
			}
			dislikes: reactions_aggregate(where: { emoji: { _eq: "U+1F44E" } }) {
				aggregate {
					count
				}
			}
			links_saved(where: { user_id: { _eq: "123123" } }) {
				id
			}	
		}
	}
`;

export const GET_LINK_BY_ID = gql`
	query GET_LINK_BY_ID($userId: String, $linkId: uuid!) {
		links_by_pk(id: $linkId) {
			...LinksAllFields
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Variables ALl links saved query
 * @param {string} userId
 * @param {string} linkId
 */
export const GET_LINK_BY_ID_VARIABLES = (userId, linkId) => ({
	userId,
	linkId,
});
