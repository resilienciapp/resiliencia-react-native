import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Profile } from '../scenes/Profile'
import { SignUp } from '../scenes/SignUp'
import { Routes } from './Routes'

const Stack = createStackNavigator()

export const UnauthenticatedStack = () => (
  <Stack.Navigator
    screenOptions={{ headerBackTitleVisible: false, headerTitle: 'HOLA' }}
    initialRouteName={Routes.SignUp}>
    <Stack.Screen name={Routes.Profile} component={Profile} />
    <Stack.Screen name={Routes.SignUp} component={SignUp} />
  </Stack.Navigator>
)
