import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { Root } from './Root'
import { getClient } from './apollo'

export const App = () => {
  return (
    <ApolloProvider client={getClient()}>
      <Root />
    </ApolloProvider>
  )
}
