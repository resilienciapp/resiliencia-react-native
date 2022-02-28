import { NavigationProp, useNavigation } from '@react-navigation/native'
import { isNull } from 'lodash'
import { DateTime } from 'luxon'
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

  const activeMarker =
    isNull(marker.expiresAt) ||
    DateTime.fromISO(marker.expiresAt).diffNow().milliseconds > 0

  if (!data || !activeMarker) {
    return null
  }

  const isOwner = data.user.events.find(event => event.marker.id === marker.id)

  if (!isOwner) {
    return null
  }

  const onPress = () => navigate(Route.Request, { markerId: marker.id })

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
  en: {
    createRequest: 'Create request',
  },
  es: {
    createRequest: 'Crear pedido',
  },
})
