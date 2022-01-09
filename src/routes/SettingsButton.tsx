import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import Settings from 'src/assets/settings.svg'
import { Color } from 'src/styles/Color'

import { Route } from './Route'
import { ParamList } from './Stack'

export const SettingsButton = () => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const navigateToSettings = () => navigate(Route.Settings)

  return <Settings fill={Color.Blue} height={24} onPress={navigateToSettings} />
}
