import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import React from 'react'

export const SignUp = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text>{strings.title}</Text>
    </View>
  </SafeAreaView>
)

const strings = new LocalizedStrings({
  'en-US': {
    title: 'title',
  },
  'es-UY': {
    title: 'título',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
})
