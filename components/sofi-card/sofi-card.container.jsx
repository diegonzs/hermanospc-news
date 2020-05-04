import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { SofiCardView } from './sofi-card.view';

const query = gql`
  query MyQuery {
    users(where: {username: {_eq: "diegoags"}}) {
      email
      username
    }
  }
`;

export const SofiCardContainer = () => {
  const { loading, data, error } = useQuery(query);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (data.users.length === 0) return <p>Ese usuario no existe</p>
  return (
    <SofiCardView user={data.users[0]} />
  )
}
