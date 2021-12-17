import { ParamListBase } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import React from 'react'
import {
  MarkersQuery_markers as Marker,
  UserQuery_user_subscriptions as Subscription,
} from 'src/gql/types'

import { Route } from './Route'

export interface ParamList extends ParamListBase {
  [Route.Details]: Subscription
  [Route.Request]: Marker
}

export type RouteComponent<T extends keyof ParamList> = React.FunctionComponent<
  NativeStackScreenProps<ParamList, T>
>

export const Stack = createNativeStackNavigator<ParamList>()
