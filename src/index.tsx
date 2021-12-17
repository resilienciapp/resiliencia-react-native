import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { getClient } from './apollo'
import { FlashCard } from './components/FlashCard'
import { AuthenticationProvider } from './contexts/AuthenticationContext'
import { FlashCardProvider } from './contexts/FlashCardContext'
import { RootNavigator } from './routes/RootNavigator'

export const App = () => (
  <ApolloProvider client={getClient()}>
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthenticationProvider>
          <FlashCardProvider>
            <>
              <RootNavigator />
              <FlashCard />
            </>
          </FlashCardProvider>
        </AuthenticationProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  </ApolloProvider>
)
