import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { LatLng, MapEvent } from 'react-native-maps'
import { useMarkers } from 'src/gql/hooks/useMarkers'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'

import { InfoMarker } from './InfoMarker'
import { NewMarker } from './NewMarker'

const initialRegion = {
  latitude: -34.895376,
  latitudeDelta: 0.0922,
  longitude: -56.187666,
  longitudeDelta: 0.0421,
}

export const Map: RouteComponent<Route.Map> = () => {
  const [coordinate, setCoordinate] = useState<LatLng>()
  const { markers } = useMarkers()

  const registerCoordinate = (event: MapEvent) => {
    setCoordinate(event.nativeEvent.coordinate)
  }

  return (
    <MapView
      initialRegion={initialRegion}
      onLongPress={registerCoordinate}
      style={styles.container}>
      {markers.map(marker => (
        <InfoMarker marker={marker} />
      ))}
      {coordinate && <NewMarker coordinate={coordinate} />}
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
