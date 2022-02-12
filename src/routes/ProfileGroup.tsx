import React from 'react'
import { Profile } from 'src/scenes/Profile'
import { Request } from 'src/scenes/Request'

import { Route } from './Route'
import { Stack } from './Stack'

export const ProfileGroup = (
  <Stack.Group>
    <Stack.Screen component={Profile} name={Route.Profile} />
    <Stack.Screen component={Request} name={Route.Request} />
  </Stack.Group>
)
