import { gql, useQuery } from '@apollo/client'
import { UserFragment } from 'src/gql/fragments/user'
import { UserQuery as UserQueryData } from 'src/gql/types'

const UserQuery = gql`
  query UserQuery {
    user {
      ...User
    }
  }
  ${UserFragment}
`

export const useUser = () => useQuery<UserQueryData>(UserQuery)
