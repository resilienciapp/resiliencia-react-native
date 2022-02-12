import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { SubscriptionsFragment } from 'src/gql/fragments/user'
import {
  UnsubscribeMarkerInput,
  UnsubscribeMarkerMutation as UnsubscribeMarkerMutationData,
  UnsubscribeMarkerMutationVariables,
} from 'src/gql/types'

import { MarkerQuery } from './useMarker'

const UnsubscribeMutation = gql`
  mutation UnsubscribeMarkerMutation($input: UnsubscribeMarkerInput!) {
    unsubscribeMarker(input: $input) {
      ...Subscriptions
    }
  }
  ${SubscriptionsFragment}
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
    unsubscribeMarker:
      ({ marker }: UnsubscribeMarkerInput) =>
      () =>
        mutate({
          refetchQueries: [{ query: MarkerQuery, variables: { id: marker } }],
          variables: { input: { marker } },
        }),
  }
}
