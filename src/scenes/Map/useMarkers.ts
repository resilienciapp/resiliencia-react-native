import { gql, useQuery } from '@apollo/client'

import { MarkerFragment } from '../../gql/fragments/marker'
import { MarkersQuery as MarkersQueryData } from '../../gql/types'

const MarkersQuery = gql`
  query MarkersQuery {
    markers {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useMarkers = () => useQuery<MarkersQueryData>(MarkersQuery)
