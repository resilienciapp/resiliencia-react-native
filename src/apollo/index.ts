import { ApolloClient, InMemoryCache } from '@apollo/client'

import { link } from './link'

export const getClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
