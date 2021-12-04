import { gql, useQuery } from '@apollo/client'
import { MarkerFragment } from 'src/gql/fragments/marker'
import { MarkersQuery as MarkersQueryData } from 'src/gql/types'

const MarkersQuery = gql`
  query MarkersQuery {
    markers {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useMarkers = () => {
  const { data } = useQuery<MarkersQueryData>(MarkersQuery)

  return { markers: data?.markers ?? [] }
}
