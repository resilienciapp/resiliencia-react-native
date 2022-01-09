import { gql, useQuery } from '@apollo/client'
import { MarkerFragment } from 'src/gql/fragments/marker'
import { MarkerQuery as MarkerQueryData } from 'src/gql/types'

const MarkerQuery = gql`
  query MarkerQuery($id: Int!) {
    marker(id: $id) {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useMarker = (id: number) => {
  const { data } = useQuery<MarkerQueryData>(MarkerQuery, {
    variables: { id },
  })

  return data?.marker
}
