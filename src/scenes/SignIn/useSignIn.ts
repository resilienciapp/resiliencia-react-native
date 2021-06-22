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
      onCompleted: async ({ signIn: { jwt } }) => storeToken(jwt),
    },
  )

  return {
    signIn: (input: SignInInput) => () => {
      mutate({
        variables: {
          input,
        },
      })
    },
  }
}
