import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

const isProd = typeof window === 'undefined'

export const createApolloClient = (options = {}) => {
  const defalut = {
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: process.env.NEXT_APP_GRAPHQL_ENDPOINT,
    })
  }

  const client = new ApolloClient(
    isProd ?
      { ...defalut, ...options, ssrMode: true, } :
      { ...defalut, ...options, connectToDevTools: true, }
  )

  return client
}