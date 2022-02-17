import { gql, useQuery } from '@apollo/client'
import { AdminRequests } from 'src/gql/types'

export const AdminRequestsQuery = gql`
  query AdminRequests($id: Int!) {
    marker(id: $id) {
      adminRequests {
        createdAt
        id
        status
        userName
      }
      id
    }
  }
`

export const useAdminRequests = (id: number) => {
  const { data, loading } = useQuery<AdminRequests>(AdminRequestsQuery, {
    variables: { id },
  })

  return { loading, marker: data?.marker }
}
