import { NavigationProp, useNavigation } from '@react-navigation/native'
import { DateTime } from 'luxon'
import pluralize from 'pluralize'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Callout, Marker as MapMarker } from 'react-native-maps'
import RRule from 'rrule'
import Schedule from 'src/assets/schedule.svg'
import { Subscribers } from 'src/components/Subscribers'
import { MarkersQuery_markers as IMarker } from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

interface Props {
  marker: IMarker
}

const getEventState = (marker: IMarker) => {
  const now = DateTime.local()

  const startOfDay = now.startOf('day').toJSDate()
  const endOfDay = now.endOf('day').toJSDate()

  const recurrence = RRule.fromString(marker.recurrence)
  recurrence.options.dtstart = startOfDay

  const occurrencesToday = recurrence.between(startOfDay, endOfDay, true)
  const nextOccurrence = recurrence.after(endOfDay)
  const nextOccurrenceDateTime = DateTime.fromJSDate(nextOccurrence)

  if (occurrencesToday.length === 0) {
    if (!nextOccurrence) {
      return null
    }

    if (marker.expiresAt && new Date(marker.expiresAt) < nextOccurrence) {
      return null
    }

    return (
      <Text numberOfLines={1} style={[styles.state, styles.stateClosed]}>
        {strings.formatString(
          strings.closedToday,
          nextOccurrenceDateTime.toLocaleString(DateTime.TIME_24_SIMPLE),
          nextOccurrenceDateTime.weekdayLong,
        )}
      </Text>
    )
  }

  const occurrenceStart = DateTime.fromJSDate(occurrencesToday[0])
  const occurrenceEnd = occurrenceStart.plus({ minutes: marker.duration })

  if (occurrenceStart.diffNow('minutes').minutes > 0) {
    return (
      <Text numberOfLines={1} style={[styles.state, styles.stateClosed]}>
        {strings.formatString(
          strings.closed,
          DateTime.fromJSDate(occurrencesToday[0]).toLocaleString(
            DateTime.TIME_24_SIMPLE,
          ),
        )}
      </Text>
    )
  }

  if (occurrenceEnd.diffNow('minutes').minutes < 0) {
    return (
      <Text numberOfLines={1} style={[styles.state, styles.stateClosed]}>
        {strings.formatString(
          strings.closedToday,
          nextOccurrenceDateTime.toLocaleString(DateTime.TIME_24_SIMPLE),
          nextOccurrenceDateTime.weekdayLong,
        )}
      </Text>
    )
  }

  return (
    <Text numberOfLines={1} style={[styles.state, styles.stateOpen]}>
      {strings.formatString(
        strings.open,
        occurrenceEnd.toLocaleString(DateTime.TIME_24_SIMPLE),
      )}
    </Text>
  )
}

export const Marker: React.FunctionComponent<Props> = ({ marker }) => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()

  const navigateToDetails = () =>
    navigate(Route.Details, { markerId: marker.id })

  const daysToExpire = Math.round(
    DateTime.fromISO(marker.expiresAt).diffNow('days').days,
  )

  return (
    <MapMarker
      coordinate={{
        latitude: marker.latitude,
        longitude: marker.longitude,
      }}
      pinColor={marker.category.color}>
      <Callout onPress={navigateToDetails}>
        <View style={styles.container}>
          <Text numberOfLines={2} style={styles.name}>
            {marker.name}
          </Text>
          {getEventState(marker)}
          <Text style={styles.description}>{marker.description}</Text>
          <Subscribers amount={marker.subscribedUsers} />
          {daysToExpire < 5 && (
            <>
              <View style={styles.expiresAtContainer}>
                <Schedule fill={Color.Reddish} height={20} width={20} />
                <Text style={styles.expiresAtText}>
                  {strings.formatString(
                    pluralize(strings.expiresAt, daysToExpire),
                    daysToExpire,
                  )}
                </Text>
              </View>
              <Text style={styles.expiresAtText}>{strings.touchToConfirm}</Text>
            </>
          )}
        </View>
      </Callout>
    </MapMarker>
  )
}

const strings = new LocalizedStrings({
  en: {
    closed: 'Closed • Open at {0}',
    closedToday: 'Closed • Open at {0} of {1}',
    expiresAt: 'Expires in {0} day',
    open: 'Opens at {0}',
    touchToConfirm: 'Tap to extend time',
  },
  es: {
    closed: 'Cerrado • Abre a las {0}',
    closedToday: 'Cerrado • Abre a las {0} del {1}',
    expiresAt: 'Expira en {0} día',
    open: 'Abierto hasta las {0}',
    touchToConfirm: 'Toca para extender el tiempo',
  },
})

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
    paddingTop: 16,
    textAlign: 'center',
  },
  expiresAtContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24,
  },
  expiresAtText: {
    color: Color.Reddish,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  name: {
    color: Color.Black,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  state: {
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 4,
  },
  stateClosed: {
    color: Color.Reddish,
  },
  stateOpen: {
    color: Color.Green,
  },
})
