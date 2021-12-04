import React from 'react'
import { Details } from 'src/scenes/Details'
import { Profile } from 'src/scenes/Profile'
import { Color } from 'src/styles/Color'

import { Route } from './Route'
import { Stack } from './Stack'

export const AuthenticatedGroup = (
  <Stack.Group>
    <Stack.Screen
      component={Profile}
      name={Route.Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={Details}
      name={Route.Details}
      options={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTintColor: Color.Black,
      }}
    />
  </Stack.Group>
)
