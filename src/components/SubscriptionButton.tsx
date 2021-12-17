import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Button, ButtonMode } from 'src/components/Button'
import { useSubscribe } from 'src/gql/hooks/useSubscribe'
import { useUnsubscribe } from 'src/gql/hooks/useUnsubscribe'
import { useUser } from 'src/gql/hooks/useUser'
import { MarkersQuery_markers as Marker } from 'src/gql/types'

interface Props {
  marker: Marker
  onCompleted?(): void
  style?: StyleProp<ViewStyle>
}

export const SubscriptionButton: React.FunctionComponent<Props> = ({
  marker,
  onCompleted,
  style,
}) => {
  const { data } = useUser()

  const { loading: loadingSubscribe, subscribeMarker } = useSubscribe({
    onCompleted,
  })
  const { loading: loadingUnsubscribe, unsubscribeMarker } = useUnsubscribe({
    onCompleted,
  })

  if (!data) {
    return null
  }

  const isSubscribed = data.user.subscriptions.find(
    subscription => subscription.marker.id === marker.id,
  )

  const onPress = isSubscribed
    ? unsubscribeMarker({ marker: marker.id })
    : subscribeMarker({ marker: marker.id })

  const text = isSubscribed ? strings.unsubscribe : strings.subscribe

  return (
    <Button
      disabled={loadingSubscribe || loadingUnsubscribe}
      mode={ButtonMode.Primary}
      onPress={onPress}
      style={style}
      text={text}
    />
  )
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
