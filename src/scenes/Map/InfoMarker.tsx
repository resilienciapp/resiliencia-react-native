import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Callout, Marker as MapMarker } from 'react-native-maps'
import { SubscriptionButton } from 'src/components/SubscriptionButton'
import { MarkersQuery_markers as Marker } from 'src/gql/types'

interface Props {
  marker: Marker
}

export const InfoMarker: React.FunctionComponent<Props> = ({ marker }) => (
  <MapMarker
    key={marker.id}
    coordinate={{
      latitude: marker.latitude,
      longitude: marker.longitude,
    }}>
    <Callout>
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.header}>
          {marker.name ?? marker.id.toString()}
        </Text>
        <Text style={styles.description}>{marker.description}</Text>
        <SubscriptionButton marker={marker} />
      </View>
    </Callout>
  </MapMarker>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: Dimensions.get('screen').width * 0.75,
    padding: 8,
  },
  description: {
    fontSize: 12,
    paddingVertical: 16,
    textAlign: 'center',
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
