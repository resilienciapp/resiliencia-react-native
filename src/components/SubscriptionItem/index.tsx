import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props {
  name?: string
  category?: string
  onItemPress: () => void
}

export const SubscriptionItem: React.FC<Props> = ({
  name,
  category,
  onItemPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onItemPress}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{category}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    flex: 1,
    paddingBottom: 5,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontWeight: 'normal',
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 5,
    width: 600,
  },
})
