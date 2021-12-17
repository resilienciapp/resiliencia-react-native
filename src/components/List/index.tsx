import React from 'react'
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { Color } from 'src/styles/Color'

import { EmptyList } from './EmptyList'

interface Props {
  data: any[]
  header: string
  renderItem: ListRenderItem<any>
}

export const List: React.FunctionComponent<Props> = ({
  data,
  header,
  renderItem,
}) => (
  <View style={styles.container}>
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
    paddingBottom: 16,
  },
  separator: {
    height: 16,
  },
})
