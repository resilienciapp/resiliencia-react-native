import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import {
  RespondMarkerRequest,
  RespondMarkerRequestInput,
  RespondMarkerRequestVariables,
} from 'src/gql/types'

const RespondMarkerRequestMutation = gql`
  mutation RespondMarkerRequest($input: RespondMarkerRequestInput!) {
    respondMarkerRequest(input: $input) {
      adminRequests {
        createdAt
        id
        status
        userName
      }
      id
    }
  }
`

export const useRespondMarkerRequest = () => {
  const [isModalVisible, setModalVisibility] = useState(false)
  const { showErrorMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    RespondMarkerRequest,
    RespondMarkerRequestVariables
  >(RespondMarkerRequestMutation, {
    onCompleted: () => setModalVisibility(false),
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    isModalVisible,
    loading,
    respondMarkerRequest: (input: RespondMarkerRequestInput) =>
      mutate({ variables: { input } }),
    setModalVisibility,
  }
}
