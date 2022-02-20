import { gql } from '@apollo/client'

import { CategoryFragment } from './category'
import { RequestFragment } from './request'

export const MarkerFragment = gql`
  fragment Marker on Marker {
    adminRequests {
      createdAt
      id
      status
      userName
    }
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
    subscribedUsers
    timeZone
  }
  ${CategoryFragment}
  ${RequestFragment}
`
