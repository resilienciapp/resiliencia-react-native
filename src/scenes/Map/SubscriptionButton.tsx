import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { useAuthContext } from 'src/routes/AuthContext'

import { useSubscribe } from './useSubscribe'
import { useUnSubscribe } from './useUnsubscribe'

interface Props {
  isSubscribed: boolean
  marker: number
}

export const SubscriptionButton: React.FunctionComponent<Props> = ({
  isSubscribed,
  marker,
}) => {
  const { isAuthenticated } = useAuthContext()
  const { subscribeMarker } = useSubscribe()
  const { unsubscribeMarker } = useUnSubscribe()

  if (!isAuthenticated) {
    return null
  }

  if (isSubscribed) {
    return (
      <TouchableOpacity onPress={unsubscribeMarker({ marker })}>
        <Text style={styles.text}>{strings.unsubscribe}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity onPress={subscribeMarker({ marker })}>
      <Text style={styles.text}>{strings.subscribe}</Text>
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
