import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { JoseTitleView } from './jose-title.view';

const MyQuery = gql`
	query MyQuery {
		users(where: { username: { _eq: "diegoags04" } }) {
			email
			username
			id
		}
	}
`;

export const JoseTitleContainer = () => {
	const { data, loading, error } = useQuery(MyQuery);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return <JoseTitleView username={data.users[0].username} />;
};
