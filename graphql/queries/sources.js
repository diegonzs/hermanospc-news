import { gql } from '@apollo/client';

export const FETCH_ALL_SOURCES = gql`
	query FETCH_ALL_SOURCES {
		links_sources {
			slug
			name
			id
			favicon
		}
	}
`;
