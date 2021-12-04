import { gql, useMutation } from '@apollo/client'
import { Keyboard } from 'react-native'
import {
  SignUpInput,
  SignUpMutation as SignUpMutationData,
  SignUpMutationVariables,
} from 'src/gql/types'
import { useAuthContext } from 'src/routes/AuthContext'

const SignUpMutation = gql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      jwt
    }
  }
`

export const useSignUp = () => {
  const { signIn } = useAuthContext()

  const [mutate] = useMutation<SignUpMutationData, SignUpMutationVariables>(
    SignUpMutation,
    { onCompleted: ({ signUp: { jwt } }) => signIn(jwt) },
  )

  return {
    signUp: (input: SignUpInput) => () => {
      Keyboard.dismiss()
      mutate({ variables: { input } })
    },
  }
}
