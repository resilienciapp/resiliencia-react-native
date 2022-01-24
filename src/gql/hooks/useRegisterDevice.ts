import { gql, useMutation } from '@apollo/client'
import {
  RegisterDeviceTokenInput,
  RegisterDeviceTokenMutation as RegisterDeviceTokenMutationData,
  RegisterDeviceTokenMutationVariables,
} from 'src/gql/types'

const RegisterDeviceTokenMutation = gql`
  mutation RegisterDeviceTokenMutation($input: RegisterDeviceTokenInput!) {
    registerDeviceToken(input: $input) {
      id
    }
  }
`

export const useRegisterDevice = () => {
  const [mutate] = useMutation<
    RegisterDeviceTokenMutationData,
    RegisterDeviceTokenMutationVariables
  >(RegisterDeviceTokenMutation)

  return {
    registerDeviceToken: (input: RegisterDeviceTokenInput) =>
      mutate({ variables: { input } }),
  }
}
