import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { MarkerFragment } from 'src/gql/fragments/marker'
import { AddMarker, AddMarkerInput, AddMarkerVariables } from 'src/gql/types'

const AddMarkerMutation = gql`
  mutation AddMarker($input: AddMarkerInput!) {
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

  const [mutate, { loading }] = useMutation<AddMarker, AddMarkerVariables>(
    AddMarkerMutation,
    {
      onCompleted,
      onError: () => showErrorMessage(commonStrings.error),
      refetchQueries: 'active',
    },
  )

  return {
    addMarker: (input: AddMarkerInput) => mutate({ variables: { input } }),
    loading,
  }
}
