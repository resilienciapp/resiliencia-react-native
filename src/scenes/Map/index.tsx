import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import MapView, { Callout, LatLng, MapEvent, Marker } from 'react-native-maps'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'

import { useMarkers } from './useMarkers'
import { useSubscribe } from './useSubscribe'
import { useUnSubscribe } from './useUnsubscribe'

export const Map: RouteComponent<Route.Map> = ({ navigation }) => {
  const [coordinate, setCoordinate] = useState<LatLng>()
  const { data } = useMarkers()

  const { subscribeMarker } = useSubscribe()
  const { unsubscribeMarker } = useUnSubscribe()

  const navigateToAddMarker = () =>
    navigation.navigate(Route.AddMarker, { coordinate })

  return (
    <MapView
      initialRegion={{
        latitude: -34.895376,
        latitudeDelta: 0.0922,
        longitude: -56.187666,
        longitudeDelta: 0.0421,
      }}
      onLongPress={(event: MapEvent) =>
        setCoordinate(event.nativeEvent.coordinate)
      }
      style={styles.container}>
      {data?.markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}>
          <Callout>
            <View style={styles.boxStyle}>
              <Text style={styles.title}>
                {marker.name ?? marker.id.toString()}
              </Text>
              <Text style={styles.description}>
                {marker.description ?? undefined}
              </Text>
              {marker.isSubscribed ? (
                <TouchableOpacity
                  onPress={() => unsubscribeMarker({ marker: marker.id })}>
                  <Text style={styles.button}>{strings.unsubscribe}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => subscribeMarker({ marker: marker.id })}>
                  <Text style={styles.button}>{strings.subscribe}</Text>
                </TouchableOpacity>
              )}
            </View>
          </Callout>
        </Marker>
      ))}
      {coordinate && (
        <Marker key={-1} coordinate={coordinate}>
          <Callout style={styles.boxStyle} onPress={navigateToAddMarker}>
            <Text>{strings.addEvent}</Text>
          </Callout>
        </Marker>
      )}
    </MapView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    addEvent: 'Add event',
    createNewEvent: 'Create new event',
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
  },
  'es-UY': {
    addEvent: 'Agregar evento',
    createNewEvent: 'Crear nuevo evento',
    subscribe: 'Subscribirse',
    unsubscribe: 'Desubscribirse',
  },
})

const styles = StyleSheet.create({
  boxStyle: {
    maxWidth: 300,
    padding: 10,
  },
  button: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  description: {
    fontSize: 12,
    paddingVertical: 8,
  },
  map: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
})
