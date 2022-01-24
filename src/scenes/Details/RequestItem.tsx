import { DateTime } from 'luxon'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { UserQuery_user_subscriptions_marker_requests as Request } from 'src/gql/types'
import { Color } from 'src/styles/Color'

export const RequestItem: React.FunctionComponent<Request> = ({
  createdAt,
  description,
}) => (
  <Text style={styles.text}>
    <Text style={styles.textBold}>
      {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_SHORT)}
    </Text>
    {': '}
    {description}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    color: Color.Black,
    paddingBottom: 16,
  },
  textBold: {
    fontWeight: 'bold',
  },
})
