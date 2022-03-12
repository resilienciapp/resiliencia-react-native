import { useDrawerStatus } from '@react-navigation/drawer'
import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import MapView, {
  LatLng,
  MapEvent,
  Marker as MapMarker,
} from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Menu from 'src/assets/menu.svg'
import { checkLocationPermission } from 'src/common/permissions'
import { useSelectedCategoriesContext } from 'src/contexts/SelectedCategoriesContext'
import { useCategories } from 'src/gql/hooks/useCategories'
import { useMarkers } from 'src/gql/hooks/useMarkers'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { Marker } from './Marker'
import { NewMarkerInput } from './NewMarkerInput'

const delta = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const initialRegion = {
  latitude: -34.895376,
  longitude: -56.187666,
  ...delta,
}

export const Map: RouteComponent<Route.Map> = ({ navigation }) => {
  const mapRef = useRef<MapView>()

  const [coordinate, setCoordinate] = useState<LatLng>()

  const isDrawerClosed = useDrawerStatus() === 'closed'

  const { top } = useSafeAreaInsets()
  const { markers } = useMarkers()
  const { categories } = useCategories()
  const { selectedCategories } = useSelectedCategoriesContext()

  const selectedMarkers = markers.filter(({ category }) =>
    categories
      .filter((_, index) => selectedCategories[index])
      .find(({ id }) => id === category.id),
  )

  useEffect(() => {
    checkLocationPermission()
  }, [])

  const clearNewMarkerCoordinates = () => {
    setCoordinate(undefined)
  }

  const setNewMarkerCoordinates = ({ nativeEvent }: MapEvent) => {
    mapRef.current?.animateCamera(
      {
        altitude: 5,
        center: {
          latitude: nativeEvent.coordinate.latitude - 0.00095,
          longitude: nativeEvent.coordinate.longitude,
        },
        heading: 0,
        pitch: 0,
        zoom: 18,
      },
      { duration: 750 },
    )
    setCoordinate(nativeEvent.coordinate)
  }

  const showMenu = isDrawerClosed && !coordinate

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
        ref={mapRef as LegacyRef<MapView>}
        renderToHardwareTextureAndroid={true}
        rotateEnabled={true}
        scrollDuringRotateOrZoomEnabled={true}
        showsBuildings={true}
        showsCompass={false}
        showsMyLocationButton={false}
        showsPointsOfInterest={true}
        showsScale={true}
        showsUserLocation={true}
        style={styles.container}
        zoomControlEnabled={true}>
        {selectedMarkers.map(marker => {
          const key = `${marker.id}${marker.subscribedUsers}${marker.requests.length}${marker.expiresAt}`

          return <Marker key={key} marker={marker} />
        })}
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
      {showMenu && (
        <TouchableOpacity
          activeOpacity={0.75}
          // @ts-ignore
          onPress={navigation.openDrawer}
          style={[styles.button, { top: top + 4 }]}>
          <View style={styles.buttonContainer}>
            <Menu height={25} width={25} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    position: 'absolute',
    zIndex: 1,
  },
  buttonContainer: {
    backgroundColor: Color.White,
    borderRadius: 30,
    padding: 8,
  },
  container: {
    flex: 1,
  },
})
