import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import Back from 'src/assets/back.svg'
import { Color } from 'src/styles/Color'

import { ParamList } from './Stack'

export const BackButton = () => {
  const { goBack } = useNavigation<NavigationProp<ParamList>>()

  return <Back fill={Color.Blue} height={24} onPress={goBack} />
}
