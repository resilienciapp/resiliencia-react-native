import React from 'react'
import LocalizedStrings from 'react-native-localization'
import Person from 'src/assets/person.svg'
import Public from 'src/assets/public.svg'
import { Color } from 'src/styles/Color'

import { AuthProvider } from './AuthContext'
import { MapGroup } from './MapGroup'
import { ProfileGroup } from './ProfileGroup'
import { Route } from './Route'
import { Tab } from './Stack'

export const Root = () => (
  <AuthProvider>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.Reddish,
        tabBarInactiveTintColor: Color.Steel,
        tabBarLabelStyle: { fontSize: 12 },
      }}>
      <Tab.Screen
        component={MapGroup}
        name={Route.MapGroup}
        options={{
          tabBarIcon: ({ color }) => <Public fill={color} height={35} />,
          title: strings.map,
        }}
      />
      <Tab.Screen
        component={ProfileGroup}
        name={Route.ProfileGroup}
        options={{
          tabBarIcon: ({ color }) => <Person fill={color} height={35} />,
          title: strings.profile,
        }}
      />
    </Tab.Navigator>
  </AuthProvider>
)

const strings = new LocalizedStrings({
  'en-US': {
    map: 'Map',
    profile: 'Profile',
  },
  'es-UY': {
    map: 'Mapa',
    profile: 'Mi Perfil',
  },
})
