import { createDrawerNavigator } from '@react-navigation/drawer'
import { ParamListBase } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import React from 'react'

import { Route } from './Route'

export interface ParamList extends ParamListBase {
  [Route.Details]: { markerId: number }
  [Route.Request]: { markerId: number }
}

export type RouteComponent<T extends keyof ParamList> = React.FunctionComponent<
  NativeStackScreenProps<ParamList, T>
>

export const Drawer = createDrawerNavigator<ParamList>()

export const Stack = createNativeStackNavigator<ParamList>()
