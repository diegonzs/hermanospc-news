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
