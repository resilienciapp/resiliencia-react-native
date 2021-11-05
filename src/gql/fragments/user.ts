import { gql } from '@apollo/client'

import { MarkerFragment } from './marker'

export const UserFragment = gql`
  fragment User on User {
    id
    profile {
      email
      name
    }
    subscriptions {
      marker {
        ...Marker
      }
    }
  }
  ${MarkerFragment}
`
