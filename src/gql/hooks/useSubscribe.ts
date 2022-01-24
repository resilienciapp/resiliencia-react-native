import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { SubscriptionsFragment } from 'src/gql/fragments/user'
import {
  SubscribeMarkerInput,
  SubscribeMutation as SubscribeMutationData,
  SubscribeMutationVariables,
} from 'src/gql/types'

const SubscribeMutation = gql`
  mutation SubscribeMutation($input: SubscribeMarkerInput!) {
    subscribeMarker(input: $input) {
      ...Subscriptions
    }
  }
  ${SubscriptionsFragment}
`

interface Props {
  onCompleted?(): void
}

export const useSubscribe = ({ onCompleted }: Props) => {
  const { showErrorMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    SubscribeMutationData,
    SubscribeMutationVariables
  >(SubscribeMutation, {
    onCompleted,
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    loading,
    subscribeMarker: (input: SubscribeMarkerInput) => () =>
      mutate({ variables: { input } }),
  }
}
