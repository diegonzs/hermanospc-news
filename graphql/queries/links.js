import { gql } from '@apollo/client';
import { FRAGMENT_LINKS_ALL_FIELDS } from '../fragments/links';

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
