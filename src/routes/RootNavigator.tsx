import messaging from '@react-native-firebase/messaging'
import React, { useEffect } from 'react'
import { Platform, Text } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import {
  useInitialNotification,
  useOnNotification,
} from 'src/common/notifications'
import { requestMessagingPermission } from 'src/common/permissions'
import { useRegisterDevice } from 'src/gql/hooks/useRegisterDevice'
import { Platform as PlatformType } from 'src/gql/types'
import { Details } from 'src/scenes/Details'
import { Map } from 'src/scenes/Map'
import { Color } from 'src/styles/Color'

import { useAuthenticationContext } from '../contexts/AuthenticationContext'
import { AuthenticationGroup } from './AuthenticationGroup'
import { ProfileGroup } from './ProfileGroup'
import { Route } from './Route'
import { Stack } from './Stack'

export const RootNavigator = () => {
  const { isAuthenticated } = useAuthenticationContext()
  const { registerDeviceToken } = useRegisterDevice()

  useInitialNotification()
  useOnNotification()

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    requestMessagingPermission().then(async authorizationStatus => {
      if (authorizationStatus === true) {
        const platform = Platform.OS as PlatformType
        const deviceId = await DeviceInfo.getUniqueId()

        messaging()
          .getToken()
          .then(token => {
            registerDeviceToken({ deviceId, platform, token })
          })

        return messaging().onTokenRefresh(token => {
          registerDeviceToken({ deviceId, platform, token })
        })
      }
    })
  }, [isAuthenticated])

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Color.White },
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTitle: () => <Text />,
      }}>
      <Stack.Screen
        component={Map}
        name={Route.Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Details} name={Route.Details} />
      {isAuthenticated ? ProfileGroup : AuthenticationGroup}
    </Stack.Navigator>
  )
}
