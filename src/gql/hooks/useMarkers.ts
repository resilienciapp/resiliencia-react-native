import { gql, useQuery } from '@apollo/client'
import LocalizedStrings from 'react-native-localization'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
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
  const { showErrorMessage } = useFlashCardContext()

  const { data } = useQuery<MarkersQueryData>(MarkersQuery, {
    onError: () => showErrorMessage(strings.error),
  })

  return { markers: data?.markers ?? [] }
}

const strings = new LocalizedStrings({
  en: {
    error: 'Error getting events near your location',
  },
  es: {
    error: 'Error al obtener eventos cerca de tu ubicación',
  },
})
