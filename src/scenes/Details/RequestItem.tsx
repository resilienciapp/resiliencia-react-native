import { DateTime } from 'luxon'
import React from 'react'
import { ListRenderItemInfo, StyleSheet, Text } from 'react-native'
import { UserQuery_user_subscriptions_marker_requests as Requests } from 'src/gql/types'

export const RequestItem: React.FC<ListRenderItemInfo<Requests>> = ({
  item,
}) => (
  <Text style={styles.text}>
    <Text style={styles.textBold}>
      {DateTime.fromISO(item.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}
    </Text>
    {': '}
    {item.description}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    paddingBottom: 5,
  },
  textBold: {
    fontWeight: 'bold',
  },
})
