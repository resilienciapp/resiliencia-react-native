import { gql, useMutation } from '@apollo/client'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { SubscriptionsFragment } from 'src/gql/fragments/user'
import { SubscribeMarker, SubscribeMarkerVariables } from 'src/gql/types'

import { MarkerQuery } from './useMarker'

const SubscribeMarkerMutation = gql`
  mutation SubscribeMarker($id: Int!) {
    subscribeMarker(id: $id) {
      ...Subscriptions
    }
  }
  ${SubscriptionsFragment}
`

interface Props {
  onCompleted?(): void
}

export const useSubscribeMarker = ({ onCompleted }: Props) => {
  const { showErrorMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    SubscribeMarker,
    SubscribeMarkerVariables
  >(SubscribeMarkerMutation, {
    onCompleted,
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    loading,
    subscribeMarker: (id: number) => () =>
      mutate({
        refetchQueries: [{ query: MarkerQuery, variables: { id } }],
        variables: { id },
      }),
  }
}
