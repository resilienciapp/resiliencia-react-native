import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props {
  text: string
}

export const Label: React.FunctionComponent<Props> = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
)

const styles = StyleSheet.create({
  text: {
    color: Color.Black,
    fontSize: 14,
    marginBottom: 16,
  },
})
