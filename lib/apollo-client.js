  
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  const httpLink = createHttpLink({
    uri: 'http://159.203.114.72/v1/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    let token = '';
    if (ctx && ctx.req && ctx.req.session) {
      token = ctx.req.session.token;
    }
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
        'x-hasura-admin-secret': 'DiegoAndAndresHasura100',
      },
    }
  });

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  })
}
