import { gql, useMutation } from '@apollo/client'
import { Keyboard } from 'react-native'
import {
  SignInInput,
  SignInMutation as SignInMutationData,
  SignInMutationVariables,
} from 'src/gql/types'
import { useAuthContext } from 'src/routes/AuthContext'

const SignInMutation = gql`
  mutation SignInMutation($input: SignInInput!) {
    signIn(input: $input) {
      jwt
    }
  }
`

export const useSignIn = () => {
  const { signIn } = useAuthContext()

  const [mutate] = useMutation<SignInMutationData, SignInMutationVariables>(
    SignInMutation,
    { onCompleted: ({ signIn: { jwt } }) => signIn(jwt) },
  )

  return {
    signIn: (input: SignInInput) => () => {
      Keyboard.dismiss()
      mutate({ variables: { input } })
    },
  }
}
