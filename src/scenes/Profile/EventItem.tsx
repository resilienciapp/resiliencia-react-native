import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Bell from 'src/assets/bell.svg'
import { Color } from 'src/styles/Color'

interface Props {
  category?: string
  name: string
  notificationBadge: boolean
  onPress?(): void
}

export const EventItem: React.FC<Props> = ({
  category,
  name,
  notificationBadge,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.information}>
      <Text numberOfLines={1} style={styles.category}>
        -{category}-
      </Text>
      <Text numberOfLines={2} style={styles.title}>
        {name}
      </Text>
    </View>
    {notificationBadge && <Bell height={25} width={25} style={styles.bell} />}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  bell: {
    marginLeft: 8,
  },
  category: {
    color: Color.Steel,
    fontSize: 12,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  information: {
    flex: 1,
  },
  title: {
    color: Color.Black,
    fontSize: 14,
  },
})
