import React from 'react'
import { StyleSheet, Text } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { RequestStatus } from 'src/gql/types'
import { Color } from 'src/styles/Color'

interface Props {
  status: RequestStatus
}

export const Status: React.FunctionComponent<Props> = ({ status }) => {
  if (status === RequestStatus.accepted) {
    return (
      <Text style={[styles.text, styles.accepted]}>{strings.accepted}</Text>
    )
  }

  if (status === RequestStatus.rejected) {
    return (
      <Text style={[styles.text, styles.rejected]}>{strings.rejected}</Text>
    )
  }

  return <Text style={[styles.text, styles.pending]}>{strings.pending}</Text>
}

const strings = new LocalizedStrings({
  'en-US': {
    accepted: 'Accepted',
    pending: 'Pending',
    rejected: 'Rejected',
  },
  'es-UY': {
    accepted: 'Aceptada',
    pending: 'Pendiente',
    rejected: 'Rechazada',
  },
})

const styles = StyleSheet.create({
  accepted: {
    color: Color.Green,
  },
  pending: {
    color: Color.Orange,
  },
  rejected: {
    color: Color.Reddish,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
})
