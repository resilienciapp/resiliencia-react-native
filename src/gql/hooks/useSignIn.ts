import { gql, useMutation } from '@apollo/client'
import { NavigationProp, useNavigation } from '@react-navigation/core'
import { Keyboard } from 'react-native'
import { strings as commonStrings } from 'src/common/strings'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import {
  SignInInput,
  SignInMutation as SignInMutationData,
  SignInMutationVariables,
} from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'

const SignInMutation = gql`
  mutation SignInMutation($input: SignInInput!) {
    signIn(input: $input) {
      jwt
    }
  }
`

export const useSignIn = () => {
  const { signIn } = useAuthenticationContext()
  const { showErrorMessage } = useFlashCardContext()
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const [mutate, { loading }] = useMutation<
    SignInMutationData,
    SignInMutationVariables
  >(SignInMutation, {
    onCompleted: ({ signIn: { jwt } }) => {
      signIn(jwt)
      navigate(Route.Profile)
    },
    onError: () => showErrorMessage(commonStrings.error),
  })

  return {
    loading,
    signIn: (input: SignInInput) => () => {
      Keyboard.dismiss()
      mutate({ variables: { input } })
    },
  }
}
