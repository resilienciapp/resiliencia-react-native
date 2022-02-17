import React from 'react'
import { StyleSheet } from 'react-native'
import Group from 'src/assets/group.svg'

interface Props {
  onPress?(): void
}

export const GroupButton: React.FunctionComponent<Props> = ({ onPress }) => (
  <Group onPress={onPress} height={25} width={25} style={styles.icon} />
)

const styles = StyleSheet.create({
  icon: {
    marginLeft: 24,
  },
})
