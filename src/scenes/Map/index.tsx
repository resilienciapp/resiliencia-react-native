import React, { useState } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import MapView, {
  LatLng,
  MapEvent,
  Marker as MapMarker,
} from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Menu from 'src/assets/menu.svg'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useMarkers } from 'src/gql/hooks/useMarkers'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { Marker } from './Marker'
import { NewMarkerInput } from './NewMarkerInput'

const initialRegion = {
  latitude: -34.895376,
  latitudeDelta: 0.0922,
  longitude: -56.187666,
  longitudeDelta: 0.0421,
}

export const Map: RouteComponent<Route.Map> = ({ navigation }) => {
  const [coordinate, setCoordinate] = useState<LatLng>()
  const { top } = useSafeAreaInsets()
  const { markers } = useMarkers()
  const { isAuthenticated } = useAuthenticationContext()

  const clearNewMarkerCoordinates = () => {
    setCoordinate(undefined)
  }

  const setNewMarkerCoordinates = (event: MapEvent) => {
    setCoordinate(event.nativeEvent.coordinate)
  }

  const navigateToProfile = () => {
    navigation.navigate(isAuthenticated ? Route.Profile : Route.SignIn)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Color.Transparent}
        barStyle="dark-content"
        translucent={true}
      />
      <MapView
        initialRegion={initialRegion}
        onLongPress={setNewMarkerCoordinates}
        showsCompass={true}
        style={styles.container}
        zoomControlEnabled={true}>
        {markers.map((marker, index) => (
          <Marker key={index} marker={marker} />
        ))}
        {coordinate && (
          <MapMarker coordinate={coordinate} pinColor={Color.Blue} />
        )}
      </MapView>
      {coordinate && (
        <NewMarkerInput
          coordinate={coordinate}
          onPressClose={clearNewMarkerCoordinates}
        />
      )}
      <TouchableOpacity
        onPress={navigateToProfile}
        style={[styles.button, { top: top + 8 }]}>
        <Menu height={25} width={25} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.White,
    borderRadius: 30,
    padding: 12,
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  container: {
    flex: 1,
  },
})
