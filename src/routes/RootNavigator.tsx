import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'

import { Map } from '../scenes/Map'
import { Routes } from './Routes'
import { UnauthenticatedStack } from './UnauthenticatedStack'

const Tab = createBottomTabNavigator()

export const Root = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'red',
      labelStyle: {
        fontSize: 15,
      },
      tabStyle: styles.tabStyle,
    }}>
    <Tab.Screen name={Routes.Map} component={Map} />
    <Tab.Screen
      name={Routes.UnauthenticatedStack}
      component={UnauthenticatedStack}
    />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
