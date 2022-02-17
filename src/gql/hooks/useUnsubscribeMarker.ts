import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { SubscriptionsFragment } from 'src/gql/fragments/user'
import {
  UnsubscribeMarker as UnsubscribeMarkerData,
  UnsubscribeMarkerVariables,
} from 'src/gql/types'

import { MarkerQuery } from './useMarker'

const UnsubscribeMutation = gql`
  mutation UnsubscribeMarker($id: Int!) {
    unsubscribeMarker(id: $id) {
      ...Subscriptions
    }
  }
  ${SubscriptionsFragment}
`

interface Props {
  onCompleted?(): void
}

export const useUnsubscribeMarker = ({ onCompleted }: Props) => {
  const { showErrorMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    UnsubscribeMarkerData,
    UnsubscribeMarkerVariables
  >(UnsubscribeMutation, {
    onCompleted,
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    loading,
    unsubscribeMarker: (id: number) => () =>
      mutate({
        refetchQueries: [{ query: MarkerQuery, variables: { id } }],
        variables: { id },
      }),
  }
}
