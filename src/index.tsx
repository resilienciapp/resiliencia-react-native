import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Root } from './routes/RootNavigator'
import { getClient } from './apollo'

export const App = () => (
  <ApolloProvider client={getClient()}>
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  </ApolloProvider>
)
