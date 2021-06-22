import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Profile } from '../scenes/Profile'
import { Routes } from './Routes'

const Stack = createStackNavigator()

export const AuthenticatedStack = () => (
  <Stack.Navigator initialRouteName={Routes.Profile}>
    <Stack.Screen name={Routes.Profile} component={Profile} />
  </Stack.Navigator>
)
