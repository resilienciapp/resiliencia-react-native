import React from 'react'
import { Details } from 'src/scenes/Details'
import { Profile } from 'src/scenes/Profile'
import { Request } from 'src/scenes/Request'
import { Settings } from 'src/scenes/Settings'

import { Route } from './Route'
import { SettingsButton } from './SettingsButton'
import { Stack } from './Stack'

export const ProfileGroup = (
  <Stack.Group>
    <Stack.Screen component={Details} name={Route.Details} />
    <Stack.Screen
      component={Profile}
      name={Route.Profile}
      options={{ headerRight: SettingsButton }}
    />
    <Stack.Screen component={Request} name={Route.Request} />
    <Stack.Screen component={Settings} name={Route.Settings} />
  </Stack.Group>
)
