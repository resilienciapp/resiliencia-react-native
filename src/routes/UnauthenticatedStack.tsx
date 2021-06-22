import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { SignIn } from '../scenes/SignIn'
import { SignUp } from '../scenes/SignUp'
import { Routes } from './Routes'

const Stack = createStackNavigator()

export const UnauthenticatedStack = () => (
  <Stack.Navigator initialRouteName={Routes.SignUp}>
    <Stack.Screen name={Routes.SignIn} component={SignIn} />
    <Stack.Screen name={Routes.SignUp} component={SignUp} />
  </Stack.Navigator>
)
