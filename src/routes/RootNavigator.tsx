import { Map } from '../scenes/Map'
import React from 'react'
import { Routes } from './Routes'
import { SignUp } from '../scenes/SignUp'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
