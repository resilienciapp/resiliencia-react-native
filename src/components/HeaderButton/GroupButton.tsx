import React from 'react'
import { StyleSheet } from 'react-native'
import Group from 'src/assets/group.svg'
import GroupWithDot from 'src/assets/groupWithDot.svg'

interface Props {
  onPress?(): void
  showBadge: boolean
}

export const GroupButton: React.FunctionComponent<Props> = ({
  onPress,
  showBadge,
}) =>
  showBadge ? (
    <GroupWithDot
      onPress={onPress}
      height={25}
      width={25}
      style={styles.icon}
    />
  ) : (
    <Group onPress={onPress} height={25} width={25} style={styles.icon} />
  )

const styles = StyleSheet.create({
  icon: {
    marginLeft: 24,
  },
})
