import React from 'react'

import { useAuthContext } from './AuthContext'
import { AuthenticatedGroup } from './AuthenticatedGroup'
import { Route } from './Route'
import { Stack } from './Stack'
import { UnauthenticatedGroup } from './UnauthenticatedGroup'

export const ProfileGroup = () => {
  const { isAuthenticated } = useAuthContext()

  const initialRouteName = isAuthenticated ? Route.Profile : Route.SignUp

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {isAuthenticated ? AuthenticatedGroup : UnauthenticatedGroup}
    </Stack.Navigator>
  )
}
