import React from 'react'
import { Details } from 'src/scenes/Details'
import { Profile } from 'src/scenes/Profile'

import { Route } from './Route'
import { Stack } from './Stack'

export const AuthenticatedGroup = (
  <Stack.Group>
    <Stack.Screen component={Profile} name={Route.Profile} />
    <Stack.Screen component={Details} name={Route.Details} />
  </Stack.Group>
)
