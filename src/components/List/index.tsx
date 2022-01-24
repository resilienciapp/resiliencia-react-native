import React from 'react'
import {
  FlatList,
  ListRenderItem,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import { Color } from 'src/styles/Color'

import { EmptyList } from './EmptyList'

interface Props<T> {
  data: T[]
  header: string
  renderItem: ListRenderItem<T>
  style?: StyleProp<ViewStyle>
}

export const List = <T extends any>({
  data,
  header,
  renderItem,
  style,
}: Props<T>) => (
  <View style={[styles.container, style]}>
    <Text numberOfLines={1} style={styles.header}>
      {header}
    </Text>
    <FlatList
      data={data}
      ListEmptyComponent={EmptyList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={renderItem}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.MysticGray,
    borderRadius: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: '100%',
  },
  header: {
    color: Color.Black,
    fontSize: 18,
    paddingBottom: 24,
  },
  separator: {
    height: 16,
  },
})
