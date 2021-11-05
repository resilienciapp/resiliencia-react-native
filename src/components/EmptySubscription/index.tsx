import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Color } from 'src/styles/Color'

export const EmptySubscription = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{strings.notSubscriptionsTitle}</Text>
    <Text style={styles.subtitle}>{strings.notSubscriptionsSubtitle}</Text>
  </View>
)

//TODO: change texts
const strings = new LocalizedStrings({
  'en-US': {
    notSubscriptionsSubtitle: 'Look at the map and find your favorite ones!',
    notSubscriptionsTitle: 'You have not subscribe to a marker yet.',
  },
  'es-UY': {
    notSubscriptionsSubtitle: 'Look at the map and find your favorite ones!',
    notSubscriptionsTitle: 'You have not subscribe to a marker yet.',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.White,
    flex: 1,
  },
  subtitle: {
    alignSelf: 'center',
    color: Color.Gray,
    fontWeight: 'normal',
  },
  title: {
    alignSelf: 'center',
    color: Color.Gray,
    fontWeight: 'bold',
  },
})
