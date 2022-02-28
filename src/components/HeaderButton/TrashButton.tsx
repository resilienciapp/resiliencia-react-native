import React from 'react'
import { StyleSheet } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Trash from 'src/assets/delete.svg'
import { strings as commonStrings } from 'src/common/strings'
import { useDeleteMarker } from 'src/gql/hooks/useDeleteMarker'

import { Modal } from '../Modal'

interface Props {
  markerId: number
}

export const TrashButton: React.FunctionComponent<Props> = ({ markerId }) => {
  const { deleteMarker, isModalVisible, loading, setModalVisibility } =
    useDeleteMarker(markerId)

  const openModal = () => setModalVisibility(true)

  return (
    <>
      <Modal
        description={strings.description}
        header={strings.header}
        isModalVisible={isModalVisible}
        loading={loading}
        onPressPrimary={deleteMarker}
        primaryText={commonStrings.yes}
        secondaryText={commonStrings.no}
        setModalVisibility={setModalVisibility}
      />
      <Trash onPress={openModal} height={25} width={25} style={styles.icon} />
    </>
  )
}

const strings = new LocalizedStrings({
  en: {
    description: 'This action could not be reverted',
    header: 'Are you sure you want to delete this event?',
  },
  es: {
    description: 'Esta acción no se podrá revertir',
    header: '¿Seguro que deseas eliminar este evento?',
  },
})

const styles = StyleSheet.create({
  icon: {
    marginLeft: 24,
  },
})
