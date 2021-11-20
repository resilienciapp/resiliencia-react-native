import { gql, useMutation } from '@apollo/client'
import {
  SubscribeMarkerInput,
  SubscribeMutation as SubscribeMutationData,
  SubscribeMutationVariables,
} from 'src/gql/types'

const SubscribeMutation = gql`
  mutation SubscribeMutation($input: SubscribeMarkerInput!) {
    subscribeMarker(input: $input) {
      id
    }
  }
`

export const useSubscribe = () => {
  const [mutate] = useMutation<
    SubscribeMutationData,
    SubscribeMutationVariables
  >(SubscribeMutation, {
    refetchQueries: ['MarkersQuery'],
  })

  return {
    subscribeMarker: (input: SubscribeMarkerInput) => () =>
      mutate({ variables: { input } }),
  }
}
