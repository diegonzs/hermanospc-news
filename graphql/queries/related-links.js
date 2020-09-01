import { gql } from '@apollo/client';
import { FRAGMENT_LINKS_ALL_FIELDS } from '../fragments/links';

export const RELATED_LINKS_BY_CATEGORY = gql`
	query RELATED_LINKS_BY_CATEGORY(
		$category: String
		$userId: String
		$linkId: uuid
	) {
		links(
			limit: 3
			order_by: { created_at: desc }
			where: {
				category: { slug: { _eq: $category } }
				_and: { _not: { id: { _eq: $linkId } } }
			}
		) {
			...LinksAllFields
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Variables ALl links saved query
 * @param {string} userId
 * @param {string} category
 * @param {string} linkId
 */
export const RELATED_LINKS_BY_CATEGORY_VARIABLES = (
	userId,
	category,
	linkId
) => ({
	userId,
	category,
	linkId,
});
