import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ParamListBase } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { LatLng } from 'react-native-maps'
import { UserQuery_user_subscriptions as Subscription } from 'src/gql/types'

import { Route } from './Route'

export interface ParamList extends ParamListBase {
  [Route.Details]: Subscription
  [Route.AddMarker]: { coordinate: LatLng }
}

export type RouteComponent<T extends keyof ParamList> = React.FunctionComponent<
  NativeStackScreenProps<ParamList, T>
>

export const Stack = createNativeStackNavigator<ParamList>()

export const Tab = createBottomTabNavigator()
