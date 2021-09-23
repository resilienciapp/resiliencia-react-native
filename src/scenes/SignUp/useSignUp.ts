import { gql, useMutation } from '@apollo/client'

import {
  SignUpInput,
  SignUpMutation as SignUpMutationData,
  SignUpMutationVariables,
} from '../../gql/types'
import { useAuthContext } from '../../routes/AuthContext'

const SignUpMutation = gql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      jwt
    }
  }
`

export const useSignUp = () => {
  const { storeToken } = useAuthContext()

  const [mutate] = useMutation<SignUpMutationData, SignUpMutationVariables>(
    SignUpMutation,
    {
      onCompleted: ({ signUp: { jwt } }) => storeToken(jwt),
    },
  )

  return {
    signUp: (input: SignUpInput) =>
      mutate({
        variables: {
          input,
        },
      }),
  }
}
