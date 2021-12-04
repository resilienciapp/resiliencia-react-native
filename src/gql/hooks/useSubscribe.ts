import { gql, useMutation } from '@apollo/client'
import { MarkerFragment } from 'src/gql/fragments/marker'
import {
  SubscribeMarkerInput,
  SubscribeMutation as SubscribeMutationData,
  SubscribeMutationVariables,
} from 'src/gql/types'

const SubscribeMutation = gql`
  mutation SubscribeMutation($input: SubscribeMarkerInput!) {
    subscribeMarker(input: $input) {
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

export const useSubscribe = ({ onCompleted, onError }: Props) => {
  const [mutate] = useMutation<
    SubscribeMutationData,
    SubscribeMutationVariables
  >(SubscribeMutation, {
    onCompleted,
    onError,
    refetchQueries: ['MarkersQuery'],
  })

  return {
    subscribeMarker: (input: SubscribeMarkerInput) => () =>
      mutate({ variables: { input } }),
  }
}
