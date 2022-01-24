import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Callout, Marker as MapMarker } from 'react-native-maps'
import { MarkersQuery_markers as IMarker } from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

interface Props {
  marker: IMarker
}

export const Marker: React.FunctionComponent<Props> = ({ marker }) => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const navigateTo = () => navigate(Route.Details, { markerId: marker.id })

  return (
    <MapMarker
      coordinate={{
        latitude: marker.latitude,
        longitude: marker.longitude,
      }}
      pinColor={marker.category.color}>
      <Callout onPress={navigateTo}>
        <View style={styles.container}>
          <Text numberOfLines={2} style={styles.name}>
            {marker.name}
          </Text>
          <Text style={styles.description}>{marker.description}</Text>
        </View>
      </Callout>
    </MapMarker>
  )
}

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
