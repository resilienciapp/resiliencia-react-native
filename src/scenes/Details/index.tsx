import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RequestButton } from 'src/components/RequestButton'
import { SubscriptionButton } from 'src/components/SubscriptionButton'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { RequestItem } from './RequestItem'

export const Details: RouteComponent<Route.Details> = ({
  navigation,
  route: { params },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: params.marker.category.name,
    })
  }, [])

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <MapView
        initialRegion={{
          latitude: params.marker.latitude,
          latitudeDelta: 0.00922,
          longitude: params.marker.longitude,
          longitudeDelta: 0.00421,
        }}
        style={styles.map}>
        <Marker
          coordinate={{
            latitude: params.marker.latitude,
            longitude: params.marker.longitude,
          }}
        />
      </MapView>
      <Text numberOfLines={2} style={styles.title}>
        {params.marker.name}
      </Text>
      <Text numberOfLines={5} style={styles.description}>
        {params.marker.description}
      </Text>
      <View style={styles.requestsContainer}>
        <FlatList
          data={params.marker.requests}
          ItemSeparatorComponent={() => (
            <View style={styles.requestsSeparator} />
          )}
          renderItem={props => <RequestItem {...props} />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SubscriptionButton
          marker={params.marker}
          onCompleted={navigation.goBack}
          style={styles.button}
        />
        <RequestButton marker={params.marker} style={styles.button} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '45%',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
  container: {
    backgroundColor: Color.White,
    flex: 1,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 12,
  },
  map: {
    height: '25%',
    marginVertical: 16,
    width: '100%',
  },
  requestsContainer: {
    backgroundColor: Color.White,
    borderRadius: 16,
    flex: 1,
    marginVertical: 16,
    paddingTop: 16,
    width: '100%',
  },
  requestsSeparator: {
    height: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
  },
})
