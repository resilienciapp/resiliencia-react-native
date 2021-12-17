import { gql } from '@apollo/client'

export const RequestFragment = gql`
  fragment Request on Request {
    createdAt
    description
    expiresAt
    id
    user {
      email
      name
    }
  }
`
