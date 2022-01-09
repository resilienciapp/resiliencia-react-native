import { gql, useMutation } from '@apollo/client'
import { NavigationProp, useNavigation } from '@react-navigation/core'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { MarkerFragment } from 'src/gql/fragments/marker'
import {
  AddRequestInput,
  AddRequestMutation as AddRequestMutationData,
  AddRequestMutationVariables,
} from 'src/gql/types'
import { ParamList } from 'src/routes/Stack'

const AddRequestMutation = gql`
  mutation AddRequestMutation($input: AddRequestInput!) {
    addRequest(input: $input) {
      ...Marker
    }
  }
  ${MarkerFragment}
`

export const useAddRequest = () => {
  const { showErrorMessage } = useFlashCardContext()
  const { goBack } = useNavigation<NavigationProp<ParamList>>()

  const [mutate, { loading }] = useMutation<
    AddRequestMutationData,
    AddRequestMutationVariables
  >(AddRequestMutation, {
    onCompleted: goBack,
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    addRequest: (input: AddRequestInput) => () => {
      mutate({ variables: { input } })
    },
    loading,
  }
}
