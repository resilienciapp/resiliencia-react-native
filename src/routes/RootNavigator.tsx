import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'

import { Map } from '../scenes/Map'
import { Colors } from '../styles/Colors'
import { AuthProvider, useAuthContext } from './AuthContext'
import { AuthenticatedStack } from './AuthenticatedStack'
import { Routes } from './Routes'
import { UnauthenticatedStack } from './UnauthenticatedStack'

const Tab = createBottomTabNavigator()

export const Root = () => (
  <AuthProvider>
    <Stack />
  </AuthProvider>
)

const Stack = () => {
  const { token } = useAuthContext()

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: Colors.Border,
        labelStyle: {
          fontSize: 15,
        },
        tabStyle: styles.tabStyle,
      }}>
      <Tab.Screen name={Routes.Map} component={Map} />
      {token ? (
        <Tab.Screen
          name={Routes.AuthenticatedStack}
          component={AuthenticatedStack}
        />
      ) : (
        <Tab.Screen
          name={Routes.UnauthenticatedStack}
          component={UnauthenticatedStack}
        />
      )}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
