import React from 'react'
import { Text } from 'react-native'
import { Map } from 'src/scenes/Map'

import { useAuthenticationContext } from '../contexts/AuthenticationContext'
import { AuthenticationGroup } from './AuthenticationGroup'
import { BackButton } from './BackButton'
import { ProfileGroup } from './ProfileGroup'
import { Route } from './Route'
import { Stack } from './Stack'

export const RootNavigator = () => {
  const { isAuthenticated } = useAuthenticationContext()

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerLeft: BackButton,
        headerShadowVisible: false,
        headerTitle: () => <Text />,
      }}>
      <Stack.Screen
        component={Map}
        name={Route.Map}
        options={{ headerShown: false }}
      />
      {isAuthenticated ? ProfileGroup : AuthenticationGroup}
    </Stack.Navigator>
  )
}
