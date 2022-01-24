import { gql } from '@apollo/client'

import { MarkerFragment } from './marker'

export const EventsFragment = gql`
  fragment Events on User {
    events {
      marker {
        ...Marker
      }
    }
    id
  }
  ${MarkerFragment}
`

export const SubscriptionsFragment = gql`
  fragment Subscriptions on User {
    id
    subscriptions {
      date
      id
      marker {
        ...Marker
      }
    }
  }
  ${MarkerFragment}
`

export const UserFragment = gql`
  fragment User on User {
    ...Events
    id
    profile {
      email
      name
    }
    ...Subscriptions
  }
  ${EventsFragment}
  ${SubscriptionsFragment}
`
