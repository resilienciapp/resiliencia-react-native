import React, { useEffect, useMemo, useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import MapView, {
  MapEvent,
  Marker as MapMarker,
  Region,
} from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Menu from 'src/assets/menu.svg'
import { Checkbox } from 'src/components/Checkbox'
import { List } from 'src/components/List'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
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
  const [coordinate, setCoordinate] = useState<Region>()
  const [selectedCategories, setSelectedCategories] = useState<boolean[]>([])

  const { isAuthenticated } = useAuthenticationContext()
  const { top } = useSafeAreaInsets()
  const { markers } = useMarkers()
  const { categories } = useCategories()

  const selectedMarkers = useMemo(
    () =>
      markers.filter(({ category }) =>
        categories
          .filter((_, index) => selectedCategories[index])
          .find(({ id }) => id === category.id),
      ),
    [selectedCategories],
  )

  useEffect(() => {
    setSelectedCategories(Array(categories.length).fill(true))
  }, [categories.length])

  const toggleCategorySelected = (index: number) => () => {
    const newSelectedCategories = [...selectedCategories]
    newSelectedCategories[index] = !newSelectedCategories[index]
    setSelectedCategories(newSelectedCategories)
  }

  const clearNewMarkerCoordinates = () => {
    setCoordinate(undefined)
  }

  const setNewMarkerCoordinates = (event: MapEvent) => {
    setCoordinate({ ...event.nativeEvent.coordinate, ...delta })
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
        region={coordinate}
        rotateEnabled={true}
        showsBuildings={true}
        showsCompass={true}
        showsMyLocationButton={true}
        showsScale={true}
        showsUserLocation={true}
        style={styles.container}
        zoomControlEnabled={true}>
        {selectedMarkers.map(marker => (
          <Marker key={marker.id} marker={marker} />
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
      {!coordinate && (
        <List
          data={categories}
          header={strings.categories}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={toggleCategorySelected(index)}
              style={styles.categoriesFilterContainer}>
              <Checkbox
                checked={selectedCategories[index]}
                onPress={toggleCategorySelected(index)}
                style={styles.categoriesFilterItem}
              />
              <Text style={{ color: item.color }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={[styles.reference, { top: top + 8 }]}
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

const strings = new LocalizedStrings({
  'en-US': {
    categories: 'Categories',
  },
  'es-UY': {
    categories: 'Categorías',
  },
})

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.White,
    borderRadius: 30,
    padding: 12,
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  categoriesFilterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoriesFilterItem: {
    height: 20,
    marginRight: 8,
    width: 20,
  },
  container: {
    flex: 1,
  },
  reference: {
    backgroundColor: Color.White,
    left: 16,
    marginTop: 0,
    position: 'absolute',
    width: '50%',
  },
})
