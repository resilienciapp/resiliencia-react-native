import React from 'react'
import { Details } from 'src/scenes/Details'
import { Profile } from 'src/scenes/Profile'

import { Route } from './Route'
import { Stack } from './Stack'

export const AuthenticatedGroup = (
  <Stack.Group>
    <Stack.Screen name={Route.Profile} component={Profile} />
    <Stack.Screen name={Route.Details} component={Details} />
  </Stack.Group>
)
