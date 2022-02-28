import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Add from 'src/assets/group_add.svg'
import { strings as commonStrings } from 'src/common/strings'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useRequestMarkerAdministration } from 'src/gql/hooks/useRequestMarkerAdministration'

import { Modal } from '../Modal'

interface Props {
  markerId: number
  visible: boolean
}

export const AddButton: React.FunctionComponent<Props> = ({
  markerId,
  visible,
}) => {
  const { isAuthenticated } = useAuthenticationContext()

  const {
    isModalVisible,
    loading,
    requestMarkerAdministration,
    setModalVisibility,
  } = useRequestMarkerAdministration(markerId)

  const toggleModal = () => {
    setModalVisibility(!isModalVisible)
  }

  if (!isAuthenticated || !visible) {
    return null
  }

  return (
    <>
      <Modal
        header={strings.header}
        isModalVisible={isModalVisible}
        loading={loading}
        onPressPrimary={requestMarkerAdministration}
        primaryText={commonStrings.yes}
        secondaryText={commonStrings.no}
        setModalVisibility={setModalVisibility}
      />
      <TouchableOpacity onPress={toggleModal}>
        <Add height={25} width={25} style={styles.icon} />
      </TouchableOpacity>
    </>
  )
}

const strings = new LocalizedStrings({
  en: {
    header: 'Do you want to request to be an administrator of this event?',
  },
  es: {
    header: '¿Desea solicitar ser administrador de este evento?',
  },
})

const styles = StyleSheet.create({
  icon: {
    marginLeft: 24,
  },
})
