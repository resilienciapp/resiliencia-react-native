import React from 'react'
import LocalizedStrings from 'react-native-localization'
import { Button, ButtonMode } from 'src/components/Button'
import { useSubscribe } from 'src/gql/hooks/useSubscribe'
import { useUnSubscribe } from 'src/gql/hooks/useUnsubscribe'
import { MarkersQuery_markers as Marker } from 'src/gql/types'
import { useAuthContext } from 'src/routes/AuthContext'

interface Props {
  marker: Marker
}

export const SubscriptionButton: React.FunctionComponent<Props> = ({
  marker,
}) => {
  const { isAuthenticated } = useAuthContext()
  const { subscribeMarker } = useSubscribe({})
  const { unsubscribeMarker } = useUnSubscribe({})

  if (!isAuthenticated) {
    return null
  }

  const onPress = marker.isSubscribed
    ? unsubscribeMarker({ marker: marker.id })
    : subscribeMarker({ marker: marker.id })

  const text = marker.isSubscribed ? strings.unsubscribe : strings.subscribe

  return <Button mode={ButtonMode.Primary} onPress={onPress} text={text} />
}

const strings = new LocalizedStrings({
  'en-US': {
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
  },
  'es-UY': {
    subscribe: 'Subscribirse',
    unsubscribe: 'Desubscribirse',
  },
})
