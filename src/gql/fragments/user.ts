import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment User on User {
    id
    profile {
      email
      isAdmin
      name
    }
  }
`
