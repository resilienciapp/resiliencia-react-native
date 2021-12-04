import { gql } from '@apollo/client'

import { CategoryFragment } from './category'

export const MarkerFragment = gql`
  fragment Marker on Marker {
    category {
      ...Category
    }
    description
    duration
    expiresAt
    id
    isSubscribed
    latitude
    longitude
    name
    recurrence
    requests {
      createdAt
      description
      expiresAt
      id
      user {
        email
        name
      }
    }
    state
  }
  ${CategoryFragment}
`
