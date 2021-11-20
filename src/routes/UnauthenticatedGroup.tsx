import React from 'react'
import { SignIn } from 'src/scenes/SignIn'
import { SignUp } from 'src/scenes/SignUp'

import { Route } from './Route'
import { Stack } from './Stack'

export const UnauthenticatedGroup = (
  <Stack.Group screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Route.SignUp} component={SignUp} />
    <Stack.Screen name={Route.SignIn} component={SignIn} />
  </Stack.Group>
)
