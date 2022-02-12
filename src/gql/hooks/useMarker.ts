import { gql, useQuery } from '@apollo/client'
import { MarkerFragment } from 'src/gql/fragments/marker'
import { MarkerQuery as MarkerQueryData } from 'src/gql/types'

export const MarkerQuery = gql`
  query MarkerQuery($id: Int!) {
    marker(id: $id) {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useMarker = (id: number) => {
  const { data, loading, refetch } = useQuery<MarkerQueryData>(MarkerQuery, {
    variables: { id },
  })

  return { loading, marker: data?.marker, refetch }
}
