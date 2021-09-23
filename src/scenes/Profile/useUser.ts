import { gql, useQuery } from '@apollo/client'

import { UserFragment } from '../../gql/fragments/user'
import { UserQuery as UserQueryData } from '../../gql/types'

const UserQuery = gql`
  query UserQuery {
    user {
      ...User
    }
  }
  ${UserFragment}
`

export const useUser = () => {
  const { data, error } = useQuery<UserQueryData>(UserQuery)
  console.log('###########', data)
  return data
}
