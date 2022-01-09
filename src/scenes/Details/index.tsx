import { isNumber } from 'lodash'
import { DateTime } from 'luxon'
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RRuleSet } from 'rrule'
import { RequestButton } from 'src/components/RequestButton'
import { SubscriptionButton } from 'src/components/SubscriptionButton'
import { useMarker } from 'src/gql/hooks/useMarker'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { CheckBox } from '../Map/CheckBox'
import { getDay } from '../Map/helpers'
import { RequestItem } from './RequestItem'

const days = [0, 1, 2, 3, 4, 5, 6]

export const Details: RouteComponent<Route.Details> = ({
  navigation,
  route: {
    params: { markerId },
  },
}) => {
  const marker = useMarker(markerId)

  useEffect(() => {
    if (marker) {
      navigation.setOptions({
        title: marker.category.name,
      })
    }
  }, [marker])

  if (!marker) {
    return null
  }

  const recurrence = RRuleSet.fromString(marker.recurrence).options

  const weekdays = recurrence.byweekday ?? days
  const startTime = DateTime.fromJSDate(recurrence.dtstart)

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <MapView
        initialRegion={{
          latitude: marker.latitude,
          latitudeDelta: 0.00922,
          longitude: marker.longitude,
          longitudeDelta: 0.00421,
        }}
        style={styles.map}>
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
        />
      </MapView>
      <Text numberOfLines={2} style={styles.title}>
        {marker.name}
      </Text>
      <Text numberOfLines={5} style={styles.description}>
        {marker.description}
      </Text>
      <View style={styles.daysContainer}>
        {days.map((day, index) => (
          <CheckBox
            disabled={true}
            key={index}
            selected={isNumber(weekdays.find(weekday => weekday === day))}
            text={getDay(index)}
          />
        ))}
      </View>
      <Text style={styles.time}>
        {startTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
        {' - '}
        {startTime
          .plus({ minutes: marker.duration })
          .toLocaleString(DateTime.TIME_24_SIMPLE)}
      </Text>
      <View style={styles.requestsContainer}>
        {!!marker.requests.length && (
          <Text style={styles.requestsTitle}>{strings.requests}</Text>
        )}
        <FlatList
          data={marker.requests}
          extraData={marker}
          ItemSeparatorComponent={() => (
            <View style={styles.requestsSeparator} />
          )}
          renderItem={props => <RequestItem {...props} />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RequestButton marker={marker} style={styles.button} />
        <SubscriptionButton
          markerId={marker.id}
          onCompleted={navigation.goBack}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    requests: 'Requests',
  },
  'es-UY': {
    requests: 'Solicitudes',
  },
})

const styles = StyleSheet.create({
  button: {
    width: '45%',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
  container: {
    backgroundColor: Color.White,
    flex: 1,
    paddingHorizontal: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    marginVertical: 16,
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
  },
  requestsSeparator: {
    height: 16,
  },
  requestsTitle: {
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingTop: 16,
  },
  time: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
  },
})
