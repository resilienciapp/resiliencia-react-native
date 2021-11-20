import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import MapView, { Callout, LatLng, MapEvent, Marker } from 'react-native-maps'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'

import { SubscriptionButton } from './SubscriptionButton'
import { useMarkers } from './useMarkers'

const initialRegion = {
  latitude: -34.895376,
  latitudeDelta: 0.0922,
  longitude: -56.187666,
  longitudeDelta: 0.0421,
}

export const Map: RouteComponent<Route.Map> = ({ navigation }) => {
  const [coordinate, setCoordinate] = useState<LatLng>()
  const { markers } = useMarkers()

  const navigateToAddMarker = () => {
    if (coordinate) {
      navigation.navigate(Route.AddMarker, { coordinate })
    }
  }

  const onLongPress = (event: MapEvent) => {
    setCoordinate(event.nativeEvent.coordinate)
  }

  return (
    <MapView
      initialRegion={initialRegion}
      onLongPress={onLongPress}
      style={styles.container}>
      {markers.map((marker, index) => (
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
              <SubscriptionButton
                isSubscribed={marker.isSubscribed}
                marker={marker.id}
              />
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
  },
  'es-UY': {
    addEvent: 'Agregar evento',
    createNewEvent: 'Crear nuevo evento',
  },
})

const styles = StyleSheet.create({
  boxStyle: {
    maxWidth: 300,
    padding: 16,
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
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
})
