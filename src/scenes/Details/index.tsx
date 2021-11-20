import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { RequestItem } from 'src/components/RequestItem'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

export const Details: RouteComponent<Route.Details> = ({ route }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.params.marker.name}</Text>
    <MapView
      initialRegion={{
        latitude: route.params.marker.latitude,
        latitudeDelta: 0.00922,
        longitude: route.params.marker.longitude,
        longitudeDelta: 0.00421,
      }}
      style={styles.map}>
      <Marker
        key={1}
        coordinate={{
          latitude: route.params.marker.latitude,
          longitude: route.params.marker.longitude,
        }}
      />
    </MapView>
    <Text style={styles.badge}>{route.params.marker.category.name}</Text>
    <Text>{route.params.marker.description}</Text>
    {/* lista de requests */}

    <FlatList
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListEmptyComponent={<View />}
      data={route.params.marker.requests}
      renderItem={({ item }) => (
        <RequestItem
          description={item.description}
          expiresAt={item.expiresAt}
        />
      )}
      ListHeaderComponent={<Text style={styles.headerTitle}>Requests</Text>}
      stickyHeaderIndices={[0]}
      style={styles.list}
    />
  </View>
)

const styles = StyleSheet.create({
  badge: {
    color: Color.Steel,
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 5,
    paddingHorizontal: 16,
  },
  headerTitle: {
    backgroundColor: Color.White,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 16,
  },
  itemSeparator: {
    backgroundColor: Color.White,
    marginVertical: 5,
  },
  list: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 2,
  },
  map: {
    height: '30%',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
})
