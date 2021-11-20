import React from 'react'

import { useAuthContext } from './AuthContext'
import { AuthenticatedGroup } from './AuthenticatedGroup'
import { Route } from './Route'
import { Stack } from './Stack'
import { UnauthenticatedGroup } from './UnauthenticatedGroup'

export const ProfileGroup = () => {
  const { isAuthenticated } = useAuthContext()

  const initialRouteName = isAuthenticated ? Route.Profile : Route.SignUp

  const Group = isAuthenticated ? AuthenticatedGroup : UnauthenticatedGroup

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}>
      {Group}
    </Stack.Navigator>
  )
}
