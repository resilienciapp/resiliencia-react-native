import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Modal from 'react-native-modal'
import Trash from 'src/assets/delete.svg'
import { strings as commonStrings } from 'src/common/strings'
import { Button, ButtonMode } from 'src/components/Button'
import { useDeleteMarker } from 'src/gql/hooks/useDeleteMarker'
import { Color } from 'src/styles/Color'

interface Props {
  markerId: number
}

export const TrashButton: React.FunctionComponent<Props> = ({ markerId }) => {
  const { deleteMarker, isModalVisible, loading, setModalVisible } =
    useDeleteMarker(markerId)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <>
      <Modal
        deviceHeight={Dimensions.get('window').height}
        deviceWidth={Dimensions.get('window').width}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver={true}
        statusBarTranslucent={true}
        style={styles.modalContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>{strings.header}</Text>
          <Text style={styles.description}>{strings.description}</Text>
          <Button
            disabled={loading}
            mode={ButtonMode.Primary}
            onPress={deleteMarker}
            text={commonStrings.yes}
          />
          <Button
            disabled={loading}
            mode={ButtonMode.PrimaryReversed}
            onPress={toggleModal}
            text={commonStrings.no}
          />
        </View>
      </Modal>

      <Trash onPress={toggleModal} height={25} width={25} />
    </>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    description: 'This action can not be reverted',
    header: 'Are you sure you want to delete the event?',
  },
  'es-UY': {
    description: 'Esta acción no puede revertir',
    header: '¿Seguro que desea eliminar el evento?',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.White,
    borderRadius: 8,
    justifyContent: 'center',
    margin: 16,
    padding: 16,
  },
  description: {
    color: Color.Black,
    fontSize: 14,
    paddingVertical: 8,
  },
  modalContainer: {
    margin: 0,
  },
  text: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
