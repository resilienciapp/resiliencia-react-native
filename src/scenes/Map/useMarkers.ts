import { gql, useQuery } from '@apollo/client'
import { MarkersQuery as MarkersQueryData } from '../../gql/types'

const MarkersQuery = gql`
  query MarkersQuery {
    markers {
      description
      id
      latitude
      longitude
      name
    }
  }
`

export const useMarkers = () => useQuery<MarkersQueryData>(MarkersQuery)
