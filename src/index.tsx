import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { getClient } from './apollo'
import { Root } from './routes/RootNavigator'

export const App = () => (
  <ApolloProvider client={getClient()}>
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  </ApolloProvider>
)
