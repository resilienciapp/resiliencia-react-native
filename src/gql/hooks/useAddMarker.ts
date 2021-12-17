import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { MarkerFragment } from 'src/gql/fragments/marker'
import {
  AddMarkerInput,
  AddMarkerMutation as AddMarkerMutationData,
  AddMarkerMutationVariables,
} from 'src/gql/types'

const AddMarkerMutation = gql`
  mutation AddMarkerMutation($input: AddMarkerInput!) {
    addMarker(input: $input) {
      ...Marker
    }
  }
  ${MarkerFragment}
`

interface Props {
  onCompleted?(): void
}

export const useAddMarker = ({ onCompleted }: Props) => {
  const { showErrorMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    AddMarkerMutationData,
    AddMarkerMutationVariables
  >(AddMarkerMutation, {
    onCompleted,
    onError: () => showErrorMessage(commonStrings.error),
    refetchQueries: ['MarkersQuery'],
  })

  return {
    addMarker: (input: AddMarkerInput) => mutate({ variables: { input } }),
    loading,
  }
}
