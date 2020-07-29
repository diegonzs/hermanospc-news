import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient;

function createApolloClient(token) {
	console.log('se retornara un nuevo apollo client');
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: 'https://hasura.hermanospc.co/v1/graphql',
			headers: {
				authorization: token ? `Bearer ${token}` : '',
				'x-hasura-admin-secret': 'DiegoAndAndresHasura100',
			},
		}),
		cache: new InMemoryCache({
			typePolicies: {
				links: {
					fields: {},
				},
			},
		}),
	});
}

export function initializeApollo(initialState = null, token = '') {
	const _apolloClient = apolloClient ?? createApolloClient(token);

	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}
	if (typeof window === 'undefined') {
		return _apolloClient;
	}
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState, token) {
	const store = useMemo(() => initializeApollo(initialState, token), [
		initialState,
		token,
	]);
	return store;
}
