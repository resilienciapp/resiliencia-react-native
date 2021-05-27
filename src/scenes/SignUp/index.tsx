import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LocalizedStrings from 'react-native-localization'

import { Routes } from '../../routes/Routes'

export const SignUp = () => {
  const { navigate } = useNavigation()

  const navigateToProfile = () => navigate(Routes.Profile)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput />
        <TouchableOpacity
          onPress={navigateToProfile}
          style={{
            backgroundColor: 'red',
            height: 100,
            width: 100,
          }}>
          <Text>{strings.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

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
