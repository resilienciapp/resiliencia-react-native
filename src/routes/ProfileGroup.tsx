import React from 'react'

import { useAuthContext } from './AuthContext'
import { AuthenticatedGroup } from './AuthenticatedGroup'
import { Route } from './Route'
import { Stack } from './Stack'
import { UnauthenticatedGroup } from './UnauthenticatedGroup'

export const ProfileGroup = () => {
  const token = useAuthContext()

  return (
    <Stack.Navigator
      initialRouteName={token ? Route.Profile : Route.SignUp}
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}>
      {token ? AuthenticatedGroup : UnauthenticatedGroup}
    </Stack.Navigator>
  )
}
