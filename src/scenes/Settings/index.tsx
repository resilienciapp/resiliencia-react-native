import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

export const Settings: RouteComponent<Route.Settings> = () => {
  const { signOut } = useAuthenticationContext()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.text}>{strings.logout}</Text>
      </TouchableOpacity>
    </View>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    logout: 'Log out',
  },
  'es-UY': {
    logout: 'Cerrar sesión',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  text: {
    color: Color.Blue,
    fontWeight: 'bold',
  },
})
