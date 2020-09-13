import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';

let apolloClient;
let hasuraToken;

export const isFirstTimeVar = makeVar(false);

function createApolloClient(token) {
	const headers = {};
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
			headers,
		}),
		connectToDevTools: true,
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						links_by_pk(_, { args, toReference }) {
							return toReference({
								__typename: 'links',
								id: args.id,
							});
						},
						isFirstTime: {
							read() {
								return isFirstTimeVar();
							},
						},
					},
				},
			},
		}),
	});
}

export function initializeApollo(initialState = null, token = '') {
	let _apolloClient;

	if (hasuraToken !== token) {
		_apolloClient = createApolloClient(token);
		hasuraToken = token;
	} else {
		_apolloClient = apolloClient ?? createApolloClient(token);
	}
	// const _apolloClient = apolloClient ?? createApolloClient(token);

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
