import React from 'react'
import { SignIn } from 'src/scenes/SignIn'
import { SignUp } from 'src/scenes/SignUp'

import { Route } from './Route'
import { Stack } from './Stack'

export const AuthenticationGroup = (
  <Stack.Group>
    <Stack.Screen component={SignUp} name={Route.SignUp} />
    <Stack.Screen component={SignIn} name={Route.SignIn} />
  </Stack.Group>
)
