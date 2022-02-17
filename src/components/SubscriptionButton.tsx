import { isNull } from 'lodash'
import { DateTime } from 'luxon'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Button, ButtonMode } from 'src/components/Button'
import { useMarker } from 'src/gql/hooks/useMarker'
import { useSubscribeMarker } from 'src/gql/hooks/useSubscribeMarker'
import { useUnsubscribeMarker } from 'src/gql/hooks/useUnsubscribeMarker'
import { useUser } from 'src/gql/hooks/useUser'

interface Props {
  markerId: number
  onCompleted?(): void
  style?: StyleProp<ViewStyle>
}

export const SubscriptionButton: React.FunctionComponent<Props> = ({
  markerId,
  onCompleted,
  style,
}) => {
  const { marker } = useMarker(markerId)
  const { data } = useUser()

  const { loading: loadingSubscribe, subscribeMarker } = useSubscribeMarker({
    onCompleted,
  })
  const { loading: loadingUnsubscribe, unsubscribeMarker } =
    useUnsubscribeMarker({
      onCompleted,
    })

  if (!marker || !data) {
    return null
  }

  const isOwner = data.user.events.find(event => event.marker.id === marker.id)

  if (isOwner) {
    return null
  }

  const activeMarker =
    isNull(marker.expiresAt) ||
    DateTime.fromISO(marker.expiresAt).diffNow().milliseconds > 0

  const isSubscribed = data.user.subscriptions.find(
    subscription => subscription.marker.id === marker.id,
  )

  if (!activeMarker && !isSubscribed) {
    return null
  }

  const onPress = isSubscribed
    ? unsubscribeMarker(marker.id)
    : subscribeMarker(marker.id)

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
