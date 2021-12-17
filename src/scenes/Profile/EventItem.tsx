import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props {
  category?: string
  name: string
  onPress?(): void
}

export const EventItem: React.FC<Props> = ({ category, name, onPress }) => (
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
    color: Color.Steel,
    fontSize: 12,
  },
  title: {
    color: Color.Black,
    fontSize: 14,
  },
})
