import { gql, useMutation } from '@apollo/client'
import { NavigationProp, useNavigation } from '@react-navigation/core'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import {
  AddRequestInput,
  AddRequestMutation as AddRequestMutationData,
  AddRequestMutationVariables,
} from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'

import { RequestFragment } from '../fragments/request'

const AddRequestMutation = gql`
  mutation AddRequestMutation($input: AddRequestInput!) {
    addRequest(input: $input) {
      ...Request
    }
  }
  ${RequestFragment}
`

export const useAddRequest = () => {
  const { showErrorMessage } = useFlashCardContext()
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const [mutate, { loading }] = useMutation<
    AddRequestMutationData,
    AddRequestMutationVariables
  >(AddRequestMutation, {
    onCompleted: () => navigate(Route.Map),
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    addRequest: (input: AddRequestInput) => () => {
      mutate({ variables: { input } })
    },
    loading,
  }
}
