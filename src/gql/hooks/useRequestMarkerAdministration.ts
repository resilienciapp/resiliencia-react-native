import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import LocalizedStrings from 'react-native-localization'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'

import { EventsFragment, SubscriptionsFragment } from '../fragments/user'
import {
  RequestMarkerAdministration,
  RequestMarkerAdministrationVariables,
} from '../types'

const RequestMarkerAdministrationMutation = gql`
  mutation RequestMarkerAdministration($id: Int!) {
    requestMarkerAdministration(id: $id) {
      id
      ...Events
      ...Subscriptions
    }
  }
  ${EventsFragment}
  ${SubscriptionsFragment}
`

enum Error {
  ALREADY_AN_ADMINISTRATOR = 'ALREADY_AN_ADMINISTRATOR',
  ALREADY_REQUESTED_ADMINISTRATION = 'ALREADY_REQUESTED_ADMINISTRATION',
  ERROR_REQUESTING_MARKER_ADMINISTRATION = 'ERROR_REQUESTING_MARKER_ADMINISTRATION',
  INVALID_MARKER = 'INVALID_MARKER',
}

const generateErrorMessage = (error: string) => {
  switch (error) {
    case Error.ALREADY_AN_ADMINISTRATOR:
      return strings.alreadyAdministrator
    case Error.ALREADY_REQUESTED_ADMINISTRATION:
      return strings.alreadyRequested
    default:
      return commonStrings.error
  }
}

export const useRequestMarkerAdministration = (id: number) => {
  const [isModalVisible, setModalVisibility] = useState(false)
  const { showErrorMessage, showInfoMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    RequestMarkerAdministration,
    RequestMarkerAdministrationVariables
  >(RequestMarkerAdministrationMutation, {
    awaitRefetchQueries: true,
    onCompleted: () => {
      setModalVisibility(false)
      showInfoMessage(strings.success)
    },
    onError: ({ graphQLErrors }) => {
      showErrorMessage(generateErrorMessage(graphQLErrors[0].message))
    },
  })

  return {
    isModalVisible,
    loading,
    requestMarkerAdministration: () => mutate({ variables: { id } }),
    setModalVisibility,
  }
}

const strings = new LocalizedStrings({
  en: {
    alreadyAdministrator: 'You already are an administrator of this event.',
    alreadyRequested:
      'You already requested to be an administrator. Please wait until is responded.',
    success: 'Request sent successfully!',
  },
  es: {
    alreadyAdministrator: 'Ya es administrador de este evento.',
    alreadyRequested:
      'Ya solicitaste ser un administrador, por favor espera la respuesta.',
    success: '¡Solicitud enviada con éxito!',
  },
})
