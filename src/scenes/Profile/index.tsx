import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Text, View } from 'react-native'

import { Button, ButtonMode } from '../../components/Button'

export const Profile: React.FunctionComponent = () => {
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('JWT')
      return true
    } catch (exception) {
      return false
    }
  }

  return (
    <View>
      <Text> Profile</Text>
      <Button
        mode={ButtonMode.Primary}
        text={'Log out'}
        onButtonPressed={logOut}
      />
    </View>
  )
}
