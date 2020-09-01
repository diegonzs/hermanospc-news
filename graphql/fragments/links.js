import { gql } from '@apollo/client';

/**
 * Fragment of all Link's fields
 */
export const FRAGMENT_LINKS_ALL_FIELDS = gql`
	fragment LinksAllFields on links {
		id
		image
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
		reactions(where: { user_id: { _eq: $userId } }) {
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
		links_saved(where: { user_id: { _eq: $userId } }) {
			id
		}
	}
`;
