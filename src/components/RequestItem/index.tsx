import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props {
  description?: string
  expiresAt?: string
}

export const RequestItem: React.FC<Props> = ({ description, expiresAt }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{description}</Text>
    <Text style={styles.subtitle}>{expiresAt?.toString}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    flex: 1,
    paddingBottom: 5,
  },
  subtitle: {
    fontWeight: 'normal',
  },
  title: {
    fontWeight: '500',
    paddingBottom: 5,
  },
})
