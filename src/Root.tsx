import MapView, { Marker } from 'react-native-maps'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import React from 'react'
import { useMarkers } from './useMarkers'

export const Root = () => {
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
        onLongPress={() => console.log('LongPress')}
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
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
})
