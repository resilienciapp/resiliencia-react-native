import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props {
  color?: Color
}

export const Spinner: React.FunctionComponent<Props> = ({ color }) => (
  <ActivityIndicator color={color} size="large" style={styles.container} />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
