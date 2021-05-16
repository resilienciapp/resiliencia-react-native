import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import LocalizedStrings from 'react-native-localization'
import MapView, { LatLng, MapEvent, Marker } from 'react-native-maps'

import { useMarkers } from './useMarkers'

export const Map = () => {
  const [coordinate, setCoordinate] = useState<LatLng>()
  const { data } = useMarkers()

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
        style={styles.map}>
        {data?.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name ?? marker.id.toString()}
            description={marker.description ?? undefined}
          />
        ))}
        {coordinate && (
          <Marker key={-1} coordinate={coordinate} title={strings.title} />
        )}
      </MapView>
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    title: 'Add event',
  },
  'es-UY': {
    title: 'Agregar evento',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
})
