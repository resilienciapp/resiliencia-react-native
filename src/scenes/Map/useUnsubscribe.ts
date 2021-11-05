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

export const useUnSubscribe = () => {
  const [mutate] = useMutation<
    UnsubscribeMarkerMutationData,
    UnsubscribeMarkerMutationVariables
  >(UnsubscribeMutation, {
    onCompleted: ({ unsubscribeMarker: { id } }) => {
      console.log('unsubscribe to: ', id)
    },
    refetchQueries: ['MarkersQuery'],
  })

  return {
    unsubscribeMarker: (input: UnsubscribeMarkerInput) =>
      mutate({
        variables: {
          input,
        },
      }),
  }
}
