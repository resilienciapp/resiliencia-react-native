import { partition } from 'lodash'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Person from 'src/assets/person.svg'
import { EmptyList } from 'src/components/List/EmptyList'
import { Modal } from 'src/components/Modal'
import { Spinner } from 'src/components/Spinner'
import { useAdminRequests } from 'src/gql/hooks/useAdminRequests'
import { useRespondMarkerRequest } from 'src/gql/hooks/useRespondMarkerRequest'
import {
  AdminRequests_marker_adminRequests as AdminRequest,
  RequestStatus,
} from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { Status } from './Status'

const sort = (a: AdminRequest, b: AdminRequest) =>
  DateTime.fromISO(b.createdAt).diff(DateTime.fromISO(a.createdAt), 'seconds')
    .seconds

export const AdministratorGroup: RouteComponent<Route.AdministratorGroup> = ({
  route: { params },
}) => {
  const [adminRequest, setAdminRequest] = useState<AdminRequest>()

  const {
    isModalVisible,
    loading: respondLoading,
    respondMarkerRequest,
    setModalVisibility,
  } = useRespondMarkerRequest()

  const { marker, loading } = useAdminRequests(params.markerId)

  const [pendingRequests, pastRequests] =
    !marker || marker.adminRequests.length === 0
      ? [[], []]
      : partition(
          marker.adminRequests,
          ({ status }) => status === RequestStatus.pending,
        )

  pendingRequests.sort(sort)
  pastRequests.sort(sort)

  const onPressPrimary = () => {
    if (adminRequest) {
      setModalVisibility(false)
      respondMarkerRequest({
        requestId: adminRequest.id,
        response: RequestStatus.accepted,
      })
    }
  }

  const onPressSecondary = () => {
    if (adminRequest) {
      setModalVisibility(false)
      respondMarkerRequest({
        requestId: adminRequest.id,
        response: RequestStatus.rejected,
      })
    }
  }

  if (loading) {
    return <Spinner />
  }

  if (!marker?.adminRequests.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{strings.noRequests}</Text>
        <EmptyList />
      </View>
    )
  }

  const showConfirmationModal = (index: number) => () => {
    setAdminRequest(pendingRequests[index])
    setModalVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{strings.header}</Text>
      <Modal
        description={
          strings.formatString(
            strings.modalDescription,
            <Text style={styles.textBold}>{adminRequest?.userName}</Text>,
          ) as string
        }
        isModalVisible={isModalVisible}
        loading={loading || respondLoading}
        onPressPrimary={onPressPrimary}
        onPressSecondary={onPressSecondary}
        primaryText={strings.accept}
        secondaryText={strings.reject}
        setModalVisibility={setModalVisibility}
      />
      {pendingRequests.length !== 0 && (
        <View style={styles.containerList}>
          {pendingRequests.map(({ id, createdAt, userName, status }, index) => (
            <TouchableOpacity
              key={`${id}${status}`}
              onPress={showConfirmationModal(index)}
              style={styles.containerListItem}>
              <View style={styles.containerItem}>
                <Person height={20} width={20} />
                <Text style={styles.text}>
                  {DateTime.fromISO(createdAt).toLocaleString(
                    DateTime.DATETIME_SHORT,
                  )}
                </Text>
                <Text style={styles.text}>{userName}</Text>
              </View>
              <Status status={status} />
            </TouchableOpacity>
          ))}
        </View>
      )}
      {pendingRequests.length !== 0 && pastRequests.length !== 0 && (
        <View style={styles.separator} />
      )}
      {pastRequests.length !== 0 && (
        <View style={styles.containerList}>
          {pastRequests.map(({ id, createdAt, userName, status }) => (
            <View key={`${id}${status}`} style={styles.containerListItem}>
              <View style={styles.containerItem}>
                <Person height={20} width={20} />
                <Text style={styles.text}>
                  {DateTime.fromISO(createdAt).toLocaleString(
                    DateTime.DATETIME_SHORT,
                  )}
                </Text>
                <Text style={styles.text}>{userName}</Text>
              </View>
              <Status status={status} />
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

const strings = new LocalizedStrings({
  en: {
    accept: 'Accept',
    header: 'List of admin requests',
    modalDescription: 'Do you want to add {0} as an event admin?',
    modalHeader: 'Event admin',
    noRequests: 'No admin requests yet',
    reject: 'Reject',
  },
  es: {
    accept: 'Aceptar',
    header: 'Lista de solicitudes de administrador',
    modalDescription: '¿Quieres agregar a {0} como administrador del evento?',
    modalHeader: 'Administrador del evento',
    noRequests: 'No existen solicitudes de administrador',
    reject: 'Rechazar',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.White,
    flex: 1,
    paddingHorizontal: 16,
  },
  containerItem: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  containerList: {
    backgroundColor: Color.White,
    paddingVertical: 16,
    width: '100%',
  },
  containerListItem: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  header: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomColor: Color.Steel,
    borderBottomWidth: 1,
    marginVertical: 12,
    width: '50%',
  },
  text: {
    color: Color.Black,
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 8,
  },
  textBold: {
    fontWeight: 'bold',
  },
})
