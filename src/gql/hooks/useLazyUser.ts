import { gql, useLazyQuery, WatchQueryFetchPolicy } from '@apollo/client'
import { UserFragment } from 'src/gql/fragments/user'
import { UserQuery as UserQueryData } from 'src/gql/types'

const UserLazyQuery = gql`
  query UserLazyQuery {
    user {
      ...User
    }
  }
  ${UserFragment}
`

export const useLazyUser = (fetchPolicy?: WatchQueryFetchPolicy) =>
  useLazyQuery<UserQueryData>(UserLazyQuery, { fetchPolicy })
