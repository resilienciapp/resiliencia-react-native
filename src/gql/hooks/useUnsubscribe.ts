import { gql, useMutation } from '@apollo/client'
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
  onError?(): void
}

export const useUnSubscribe = ({ onCompleted, onError }: Props) => {
  const [mutate] = useMutation<
    UnsubscribeMarkerMutationData,
    UnsubscribeMarkerMutationVariables
  >(UnsubscribeMutation, {
    onCompleted,
    onError,
    refetchQueries: ['MarkersQuery'],
  })

  return {
    unsubscribeMarker: (input: UnsubscribeMarkerInput) => () =>
      mutate({ variables: { input } }),
  }
}
