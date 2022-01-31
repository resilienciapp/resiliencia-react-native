import { gql, useMutation } from '@apollo/client'
import LocalizedStrings from 'react-native-localization'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import {
  ConfirmMarkerInput,
  ConfirmMarkerMutation as ConfirmMarkerMutationData,
  ConfirmMarkerMutationVariables,
} from 'src/gql/types'

import { MarkerFragment } from '../fragments/marker'

const ConfirmMarkerMutation = gql`
  mutation ConfirmMarkerMutation($input: ConfirmMarkerInput!) {
    confirmMarker(input: $input) {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useConfirmMarker = (input: ConfirmMarkerInput) => {
  const { showErrorMessage, showInfoMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    ConfirmMarkerMutationData,
    ConfirmMarkerMutationVariables
  >(ConfirmMarkerMutation, {
    onCompleted: () => showInfoMessage(strings.success),
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    confirmMarker: () => mutate({ variables: { input } }),
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
