import { gql, useMutation } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import LocalizedStrings from 'react-native-localization'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { DeleteMarker, DeleteMarkerVariables } from 'src/gql/types'

const DeleteMarkerMutation = gql`
  mutation DeleteMarker($id: Int!) {
    deleteMarker(id: $id) {
      id
    }
  }
`

export const useDeleteMarker = (id: number) => {
  const [isModalVisible, setModalVisibility] = useState(false)
  const { showErrorMessage, showInfoMessage } = useFlashCardContext()
  const { goBack } = useNavigation()

  const [mutate, { loading }] = useMutation<
    DeleteMarker,
    DeleteMarkerVariables
  >(DeleteMarkerMutation, {
    onCompleted: () => {
      goBack()
      showInfoMessage(strings.success)
    },
    onError: () => {
      setModalVisibility(false)
      showErrorMessage(commonStrings.error)
    },
    refetchQueries: ['MarkersQuery'],
  })

  return {
    deleteMarker: () => mutate({ variables: { id } }),
    isModalVisible,
    loading,
    setModalVisibility,
  }
}

const strings = new LocalizedStrings({
  en: {
    success: 'Event deleted successfully',
  },
  es: {
    success: 'Evento eliminado con éxito',
  },
})
