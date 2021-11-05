import React from 'react'
import LocalizedStrings from 'react-native-localization'
import { AddMarker } from 'src/scenes/AddMarker'
import { Map } from 'src/scenes/Map'

import { Route } from './Route'
import { Stack } from './Stack'

export const MapGroup = () => (
  <Stack.Navigator
    initialRouteName={Route.Map}
    screenOptions={{
      headerBackTitleVisible: false,
      headerShadowVisible: false,
    }}>
    <Stack.Screen
      component={AddMarker}
      name={Route.AddMarker}
      options={{ title: strings.title }}
    />
    <Stack.Screen
      component={Map}
      name={Route.Map}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

const strings = new LocalizedStrings({
  en: {
    title: 'Add event',
  },
  es: {
    title: 'Agregar evento',
  },
})
