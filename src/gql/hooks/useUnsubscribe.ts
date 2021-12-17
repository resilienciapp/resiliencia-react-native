import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { MarkerFragment } from 'src/gql/fragments/marker'
import {
  UnsubscribeMarkerInput,
  UnsubscribeMarkerMutation as UnsubscribeMarkerMutationData,
  UnsubscribeMarkerMutationVariables,
} from 'src/gql/types'

const UnsubscribeMutation = gql`
  mutation UnsubscribeMarkerMutation($input: UnsubscribeMarkerInput!) {
    unsubscribeMarker(input: $input) {
      id
      subscriptions {
        marker {
          ...Marker
        }
      }
    }
  }
  ${MarkerFragment}
`

interface Props {
  onCompleted?(): void
}

export const useUnsubscribe = ({ onCompleted }: Props) => {
  const { showErrorMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    UnsubscribeMarkerMutationData,
    UnsubscribeMarkerMutationVariables
  >(UnsubscribeMutation, {
    onCompleted,
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    loading,
    unsubscribeMarker: (input: UnsubscribeMarkerInput) => () =>
      mutate({ variables: { input } }),
  }
}
