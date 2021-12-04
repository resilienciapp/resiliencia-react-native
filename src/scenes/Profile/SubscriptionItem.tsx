import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  category?: string
  name: string
  onPress?(): void
}

export const SubscriptionItem: React.FC<Props> = ({
  category,
  name,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text numberOfLines={1} style={styles.category}>
      -{category}-
    </Text>
    <Text numberOfLines={2} style={styles.title}>
      {name}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  category: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
})
