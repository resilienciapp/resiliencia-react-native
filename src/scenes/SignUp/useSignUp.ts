import { gql, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

import {
  SignUpInput,
  SignUpMutation as SignUpMutationData,
  SignUpMutationVariables,
} from '../../gql/types'

const storeData = async (jwt: string) => {
  try {
    await AsyncStorage.setItem('JWT', jwt)
  } catch {
    Alert.alert('Error', 'Invalid email or password', [{ text: 'OK' }])
  }
}

const SignUpMutation = gql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      jwt
    }
  }
`

export const useSignUp = () => {
  const [mutate] = useMutation<SignUpMutationData, SignUpMutationVariables>(
    SignUpMutation,
    {
      onCompleted: ({ signUp }) => storeData(signUp.jwt),
    },
  )

  return {
    signUp: (input: SignUpInput) => {
      mutate({
        variables: {
          input,
        },
      })
    },
  }
}
