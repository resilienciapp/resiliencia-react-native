import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import MapView, { Marker } from 'react-native-maps'
import { Button, ButtonMode } from 'src/components/Button'
import { useUnSubscribe } from 'src/gql/hooks/useUnsubscribe'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { RequestItem } from './RequestItem'

export const Details: RouteComponent<Route.Details> = ({
  navigation,
  route: { params },
}) => {
  const { unsubscribeMarker } = useUnSubscribe({
    onCompleted: navigation.goBack,
  })

  useEffect(() => {
    navigation.setOptions({
      title: params.marker.category.name,
    })
  }, [])

  return (
    <View style={styles.container}>
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
        <Button
          mode={ButtonMode.Primary}
          onPress={unsubscribeMarker({ marker: params.marker.id })}
          text={strings.unsubscribe}
        />
      </View>
    </View>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    unsubscribe: 'Unsubscribe',
  },
  'es-UY': {
    unsubscribe: 'Desubscribirse',
  },
})

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 8,
    width: '100%',
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
