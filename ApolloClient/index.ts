import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

export default (options = {}) => {
  const defalut = {
    ...options,
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: process.env.NEXT_APP_GRAPHQL_ENDPOINT,
      fetch,
    }),
  }

  const client = new ApolloClient(process.env.NODE_ENV === 'production' ?
    { ...defalut, ssrMode: true } :
    { ...defalut, connectToDevTools: true })

  return client
}
