import React from 'react'

import { AuthProvider } from './AuthContext'
import { MapGroup } from './MapGroup'
import { ProfileGroup } from './ProfileGroup'
import { Route } from './Route'
import { Tab } from './Stack'

export const Root = () => (
  <AuthProvider>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={Route.MapGroup} component={MapGroup} />
      <Tab.Screen name={Route.ProfileGroup} component={ProfileGroup} />
    </Tab.Navigator>
  </AuthProvider>
)
