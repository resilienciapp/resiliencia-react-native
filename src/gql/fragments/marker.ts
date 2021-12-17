import { gql } from '@apollo/client'

import { CategoryFragment } from './category'
import { RequestFragment } from './request'

export const MarkerFragment = gql`
  fragment Marker on Marker {
    category {
      ...Category
    }
    description
    duration
    expiresAt
    id
    latitude
    longitude
    name
    recurrence
    requests {
      ...Request
    }
    state
  }
  ${CategoryFragment}
  ${RequestFragment}
`
