import { gql } from '@apollo/client';
import { FRAGMENT_LINKS_ALL_FIELDS } from '../fragments/links';

/**
 * Query to get all categories with user signed in
 */
export const ALL_CATEGORIES_QUERY_WITH_USER = gql`
	query ALL_CATEGORIES_QUERY_WITH_USER($userId: String) {
		categories(order_by: { position: asc }) {
			emoji
			id
			slug
			title
			links(
				limit: 5
				order_by: { created_at: desc }
				where: { source: { users_sources: { user_id: { _eq: $userId } } } }
			) {
				...LinksAllFields
			}
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Query to get all categories
 */
export const ALL_CATEGORIES_QUERY = gql`
	query ALL_CATEGORIES_QUERY($userId: String) {
		categories(order_by: { position: asc }) {
			emoji
			id
			slug
			title
			links(limit: 5, order_by: { created_at: desc }) {
				...LinksAllFields
			}
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Query to get all links in a category using it's slug.
 */
export const ALL_LINKS_BY_CATEGORY = gql`
	query ALL_LINKS_BY_CATEGORY($slug: String, $offset: Int, $userId: String) {
		categories(where: { slug: { _eq: $slug } }) {
			title
			emoji
			links(limit: 10, order_by: { created_at: desc }, offset: $offset) {
				...LinksAllFields
			}
			links_aggregate {
				aggregate {
					count
				}
			}
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Query to get all links in a category using it's slug.
 */
export const ALL_LINKS_BY_CATEGORY_WITH_USER = gql`
	query ALL_LINKS_BY_CATEGORY_WITH_USER(
		$slug: String
		$offset: Int
		$userId: String
	) {
		categories(where: { slug: { _eq: $slug } }) {
			title
			emoji
			links(
				limit: 10
				order_by: { created_at: desc }
				offset: $offset
				where: { source: { users_sources: { user_id: { _eq: $userId } } } }
			) {
				...LinksAllFields
			}
			links_aggregate {
				aggregate {
					count
				}
			}
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Get variables for all categories query
 * @param {string} userId
 */
export const ALL_CATEGORIES_QUERY_VARIABLES = (userId) => ({
	userId,
});

/**
 * Get variables for all links by category
 * @param {string} userId
 * @param {string | string[]} slug - Category slug
 * @param {number} offset - Indicates how many links should be skipped from the beggining
 */
export const ALL_LINKS_BY_CATEGORY_VARIABLES = (userId, slug, offset) => ({
	userId,
	slug,
	offset,
});
