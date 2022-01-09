import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { EmptyList } from 'src/components/List/EmptyList'
import {
  MarkersQuery_markers as Marker,
  UserQuery_user_events as Event,
  UserQuery_user_subscriptions as Subscription,
} from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

interface Props {
  data: (Subscription | Event)[]
  Item: any
}

export const MarkerList: React.FunctionComponent<Props> = ({ data, Item }) => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const navigateToDetail = (marker: Marker) => () =>
    navigate(Route.Details, { markerId: marker.id })

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={EmptyList}
      renderItem={({ item }) => (
        <Item
          name={item.marker.name}
          category={item.marker.category.name}
          onPress={navigateToDetail(item.marker)}
        />
      )}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.MysticGray,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  separator: {
    height: 16,
  },
})
