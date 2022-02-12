import { gql, useMutation } from '@apollo/client'
import LocalizedStrings from 'react-native-localization'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { ConfirmMarker, ConfirmMarkerVariables } from 'src/gql/types'

import { MarkerFragment } from '../fragments/marker'

const ConfirmMarkerMutation = gql`
  mutation ConfirmMarker($id: Int!) {
    confirmMarker(id: $id) {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useConfirmMarker = (id: number) => {
  const { showErrorMessage, showInfoMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    ConfirmMarker,
    ConfirmMarkerVariables
  >(ConfirmMarkerMutation, {
    onCompleted: () => showInfoMessage(strings.success),
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    confirmMarker: () => mutate({ variables: { id } }),
    loading,
  }
}

const strings = new LocalizedStrings({
  'en-US': {
    success: 'Event confirmed successfully',
  },
  'es-UY': {
    success: 'Evento confirmado con éxito',
  },
})
