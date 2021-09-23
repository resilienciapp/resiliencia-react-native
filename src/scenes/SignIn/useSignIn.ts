import { gql, useMutation } from '@apollo/client'

import {
  SignInInput,
  SignInMutation as SignInMutationData,
  SignInMutationVariables,
} from '../../gql/types'
import { useAuthContext } from '../../routes/AuthContext'

const SignInMutation = gql`
  mutation SignInMutation($input: SignInInput!) {
    signIn(input: $input) {
      jwt
    }
  }
`

export const useSignIn = () => {
  const { storeToken } = useAuthContext()

  const [mutate] = useMutation<SignInMutationData, SignInMutationVariables>(
    SignInMutation,
    {
      onCompleted: ({ signIn: { jwt } }) => {
        console.log('JWT ----', jwt)
        storeToken(jwt)
      },
      onError: error => console.log(error.message),
    },
  )

  return {
    signIn: (input: SignInInput) => () =>
      mutate({
        variables: {
          input,
        },
      }),
  }
}
