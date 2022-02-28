import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Group from 'src/assets/group.svg'
import GroupWithDot from 'src/assets/groupWithDot.svg'

interface Props {
  onPress?(): void
  showBadge: boolean
}

export const GroupButton: React.FunctionComponent<Props> = ({
  onPress,
  showBadge,
}) => (
  <TouchableOpacity onPress={onPress}>
    {showBadge ? (
      <GroupWithDot height={25} width={25} style={styles.icon} />
    ) : (
      <Group height={25} width={25} style={styles.icon} />
    )}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {
    marginLeft: 24,
  },
})
