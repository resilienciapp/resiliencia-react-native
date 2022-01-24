import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { EmptyList } from 'src/components/List/EmptyList'
import { Spinner } from 'src/components/Spinner'
import { useUserSubscriptions } from 'src/gql/hooks/useUser'
import { MarkersQuery_markers as Marker } from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { SubscriptionItem } from './SubscriptionItem'

export const SubscriptionsList: React.FunctionComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const { data, loading, refetch } = useUserSubscriptions()

  const navigateToDetail = (marker: Marker) => () =>
    navigate(Route.Details, { markerId: marker.id })

  if (!data && loading) {
    return <Spinner />
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data?.user.subscriptions ?? []}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={EmptyList}
      onRefresh={refetch}
      refreshing={loading}
      renderItem={({ item }) => (
        <SubscriptionItem
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
