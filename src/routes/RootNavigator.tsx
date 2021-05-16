import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'

import { Map } from '../scenes/Map'
import { SignUp } from '../scenes/SignUp'
import { Routes } from './Routes'

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
    <Tab.Screen name={Routes.SignUp} component={SignUp} />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
