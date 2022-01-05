import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Callout, Marker as MapMarker } from 'react-native-maps'
import { SubscriptionButton } from 'src/components/SubscriptionButton'
import { MarkersQuery_markers as IMarker } from 'src/gql/types'
import { Color } from 'src/styles/Color'

interface Props {
  marker: IMarker
}

export const Marker: React.FunctionComponent<Props> = ({ marker }) => (
  <MapMarker
    coordinate={{
      latitude: marker.latitude,
      longitude: marker.longitude,
    }}
    pinColor={marker.category.color}>
    <Callout>
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.name}>
          {marker.name}
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
    minWidth: Dimensions.get('screen').width * 0.45,
    padding: 8,
  },
  description: {
    color: Color.Black,
    fontSize: 12,
    paddingVertical: 16,
    textAlign: 'center',
  },
  name: {
    color: Color.Black,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
