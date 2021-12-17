import { gql, useMutation } from '@apollo/client'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Keyboard } from 'react-native'
import { strings as commonStrings } from 'src/common/strings'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import {
  SignUpInput,
  SignUpMutation as SignUpMutationData,
  SignUpMutationVariables,
} from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'

const SignUpMutation = gql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      jwt
    }
  }
`

export const useSignUp = () => {
  const { signIn } = useAuthenticationContext()
  const { showErrorMessage } = useFlashCardContext()
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const [mutate, { loading }] = useMutation<
    SignUpMutationData,
    SignUpMutationVariables
  >(SignUpMutation, {
    onCompleted: ({ signUp: { jwt } }) => {
      signIn(jwt)
      navigate(Route.Profile)
    },
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    loading,
    signUp: (input: SignUpInput) => () => {
      Keyboard.dismiss()
      mutate({ variables: { input } })
    },
  }
}
