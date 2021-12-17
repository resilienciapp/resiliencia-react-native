import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { useUser } from 'src/gql/hooks/useUser'
import { MarkersQuery_markers as Marker } from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'

import { Button, ButtonMode } from './Button'

interface Props {
  marker: Marker
  style?: StyleProp<ViewStyle>
}

export const RequestButton: React.FunctionComponent<Props> = ({
  marker,
  style,
}) => {
  const { data } = useUser()
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  if (!data) {
    return null
  }

  const isOwner = data.user.events.find(event => event.marker.id === marker.id)

  if (!isOwner) {
    return null
  }

  const onPress = () => navigate(Route.Request, marker)

  return (
    <Button
      mode={ButtonMode.Primary}
      onPress={onPress}
      style={style}
      text={strings.createRequest}
    />
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    createRequest: 'Create request',
  },
  'es-UY': {
    createRequest: 'Hacer pedido',
  },
})
