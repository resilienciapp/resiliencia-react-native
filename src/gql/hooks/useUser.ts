import { gql, useLazyQuery, useQuery } from '@apollo/client'
import {
  EventsFragment,
  SubscriptionsFragment,
  UserFragment,
} from 'src/gql/fragments/user'
import {
  UserEventsQuery as UserEventsQueryData,
  UserQuery as UserQueryData,
  UserSubscriptionsQuery as UserSubscriptionsQueryData,
} from 'src/gql/types'

export const UserQuery = gql`
  query UserQuery {
    user {
      ...User
    }
  }
  ${UserFragment}
`

export const UserEventsQuery = gql`
  query UserEventsQuery {
    user {
      ...Events
    }
  }
  ${EventsFragment}
`

export const UserSubscriptionsQuery = gql`
  query UserSubscriptionsQuery {
    user {
      ...Subscriptions
    }
  }
  ${SubscriptionsFragment}
`

export const useUser = () => useQuery<UserQueryData>(UserQuery)

export const useUserEvents = () =>
  useQuery<UserEventsQueryData>(UserEventsQuery)

export const useLazyUserEvents = () =>
  useLazyQuery<UserEventsQueryData>(UserEventsQuery)

export const useUserSubscriptions = () =>
  useQuery<UserSubscriptionsQueryData>(UserSubscriptionsQuery)
