import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { getClient } from './apollo'
import { FlashCard } from './components/FlashCard'
import { AuthenticationProvider } from './contexts/AuthenticationContext'
import { FlashCardProvider } from './contexts/FlashCardContext'
import { SelectedCategoriesProvider } from './contexts/SelectedCategoriesContext'
import { DrawerNavigator } from './routes/DrawerNavigator'

const hideBootSplash = () => RNBootSplash.hide({ fade: true })

export const App = () => (
  <GestureHandlerRootView style={styles.container}>
    <ApolloProvider client={getClient()}>
      <SafeAreaProvider>
        <NavigationContainer onReady={hideBootSplash}>
          <AuthenticationProvider>
            <FlashCardProvider>
              <SelectedCategoriesProvider>
                <>
                  <DrawerNavigator />
                  <FlashCard />
                </>
              </SelectedCategoriesProvider>
            </FlashCardProvider>
          </AuthenticationProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  </GestureHandlerRootView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
