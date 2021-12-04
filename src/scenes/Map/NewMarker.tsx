import { NavigationProp, useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Callout, LatLng, Marker } from 'react-native-maps'
import { Button, ButtonMode } from 'src/components/Button'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'

interface Props {
  coordinate: LatLng
}

export const NewMarker: React.FunctionComponent<Props> = ({ coordinate }) => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const navigateToAddMarker = () => {
    if (coordinate) {
      navigate(Route.AddMarker, { coordinate })
    }
  }

  return (
    <Marker key={-1} coordinate={coordinate}>
      <Callout style={styles.container}>
        <Button
          mode={ButtonMode.Primary}
          onPress={navigateToAddMarker}
          text={strings.addEvent}
        />
      </Callout>
    </Marker>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    addEvent: 'Add event',
  },
  'es-UY': {
    addEvent: 'Agregar evento',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: Dimensions.get('screen').width * 0.75,
    minWidth: Dimensions.get('screen').width * 0.5,
    padding: 8,
  },
})
