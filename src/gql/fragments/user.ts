import { gql } from '@apollo/client'

import { MarkerFragment } from './marker'

export const UserFragment = gql`
  fragment User on User {
    events {
      marker {
        ...Marker
      }
    }
    id
    profile {
      email
      name
    }
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
