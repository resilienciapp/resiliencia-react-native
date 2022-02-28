import { isNumber } from 'lodash'
import { DateTime } from 'luxon'
import pluralize from 'pluralize'
import React, { useEffect, useMemo } from 'react'
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import RRule from 'rrule'
import Schedule from 'src/assets/schedule.svg'
import { showNotificationBadge } from 'src/common/marker'
import { Button, ButtonMode } from 'src/components/Button'
import { AddButton } from 'src/components/HeaderButton/AddButton'
import { GroupButton } from 'src/components/HeaderButton/GroupButton'
import { TrashButton } from 'src/components/HeaderButton/TrashButton'
import { RequestButton } from 'src/components/RequestButton'
import { Spinner } from 'src/components/Spinner'
import { Subscribers } from 'src/components/Subscribers'
import { SubscriptionButton } from 'src/components/SubscriptionButton'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useConfirmMarker } from 'src/gql/hooks/useConfirmMarker'
import { useMarker } from 'src/gql/hooks/useMarker'
import { useReportMarker } from 'src/gql/hooks/useReportMarker'
import { useLazyUserEvents } from 'src/gql/hooks/useUser'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { CheckBox } from '../Map/CheckBox'
import { getDay } from '../Map/helpers'
import { RequestItem } from './RequestItem'

const days = [0, 1, 2, 3, 4, 5, 6]

export const Details: RouteComponent<Route.Details> = ({
  navigation,
  route: { params },
}) => {
  const { isAuthenticated } = useAuthenticationContext()
  const { loading, marker, refetch } = useMarker(params.markerId)
  const [getUserEvents, { data }] = useLazyUserEvents()
  const { confirmMarker, loading: loadingConfirmation } = useConfirmMarker(
    params.markerId,
  )
  const { reportMarker, loading: loadingReport } = useReportMarker(
    params.markerId,
  )

  useEffect(() => {
    if (isAuthenticated) {
      getUserEvents()
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (!data || !marker || !isAuthenticated) {
      return
    }

    navigation.setOptions({
      headerRight: () => {
        const isOwner = data.user.events.find(
          ({ marker: { id } }) => id === params.markerId,
        )

        return (
          <>
            {isOwner && (
              <GroupButton
                onPress={() =>
                  navigation.navigate(Route.AdministratorGroup, {
                    markerId: params.markerId,
                  })
                }
                showBadge={showNotificationBadge(marker)}
              />
            )}
            {isOwner && <TrashButton markerId={marker.id} />}
            <AddButton markerId={marker.id} visible={!isOwner} />
          </>
        )
      },
    })
  }, [data?.user.events.length, marker, isAuthenticated])

  const requests = useMemo(
    () =>
      (marker ? [...marker.requests] : []).sort(
        (a, b) =>
          DateTime.fromISO(b.createdAt).diff(DateTime.fromISO(a.createdAt))
            .milliseconds,
      ),
    [marker?.requests.length],
  )

  if (loading) {
    return <Spinner />
  }

  if (!marker) {
    return null
  }

  const startOfDay = DateTime.local().startOf('day').toJSDate()

  const recurrence = RRule.fromString(marker.recurrence)

  const weekdays = recurrence.options.byweekday ?? days
  const startTime = DateTime.fromJSDate(
    recurrence.after(startOfDay, true) ?? recurrence.before(startOfDay, true),
  )

  const daysToExpire = Math.round(
    DateTime.fromISO(marker.expiresAt).diffNow('days').days,
  )

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={loading} />
        }
        showsVerticalScrollIndicator={false}>
        <MapView
          initialRegion={{
            latitude: marker.latitude,
            latitudeDelta: 0.00922,
            longitude: marker.longitude,
            longitudeDelta: 0.00421,
          }}
          pitchEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          style={styles.map}
          zoomControlEnabled={true}
          zoomEnabled={false}>
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        </MapView>
        <Text numberOfLines={1} style={styles.category}>
          -{marker.category.name}-
        </Text>
        <Text numberOfLines={2} style={styles.title}>
          {marker.name}
        </Text>
        {!!marker.description && (
          <Text numberOfLines={5} style={styles.description}>
            {marker.description}
          </Text>
        )}
        <Subscribers amount={marker.subscribedUsers} />
        {daysToExpire < 5 && (
          <View style={styles.expiresAt}>
            <View style={styles.expiresAtContainer}>
              <Schedule fill={Color.Reddish} height={20} width={20} />
              <Text numberOfLines={1} style={styles.expiresAtText}>
                {strings.formatString(
                  pluralize(strings.expiresAt, daysToExpire),
                  daysToExpire,
                )}
              </Text>
            </View>
            <Text numberOfLines={2} style={styles.expiresAtText}>
              {strings.touchToConfirm}
            </Text>
          </View>
        )}
        <View style={styles.sectionContainer}>
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
            {'  -  '}
            {startTime
              .plus({ minutes: marker.duration })
              .toLocaleString(DateTime.TIME_24_SIMPLE)}
          </Text>
        </View>
        {!!marker.requests.length && (
          <View style={styles.sectionContainer}>
            {requests.map(request => (
              <RequestItem key={request.id} {...request} />
            ))}
          </View>
        )}
      </ScrollView>
      {isAuthenticated && (
        <View style={styles.buttonContainer}>
          <RequestButton marker={marker} />
          <SubscriptionButton markerId={marker.id} />
          <View style={styles.buttonActionsContainer}>
            <Button
              disabled={loadingConfirmation}
              mode={ButtonMode.PrimaryReversed}
              onPress={confirmMarker}
              style={styles.button}
              text={strings.confirm}
            />
            <Button
              disabled={loadingReport}
              mode={ButtonMode.PrimaryReversed}
              onPress={reportMarker}
              style={styles.button}
              text={strings.report}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  en: {
    confirm: 'Confirm activity 👍',
    expiresAt: 'Expires in {0} day',
    report: 'Report inactivity 👎',
    touchToConfirm: 'Confirm event to extend time',
  },
  es: {
    confirm: 'Confirmar actividad 👍',
    expiresAt: 'Expira en {0} día',
    report: 'Reportar inactividad 👎',
    touchToConfirm: 'Confirme el evento para extender el tiempo',
  },
})

const styles = StyleSheet.create({
  button: {
    width: '49%',
  },
  buttonActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  category: {
    color: Color.Black,
    fontSize: 10,
    marginBottom: 4,
    textAlign: 'center',
  },
  container: {
    backgroundColor: Color.White,
    flex: 1,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  daysContainer: {
    flexDirection: 'row',
  },
  description: {
    color: Color.Black,
    fontSize: 12,
    marginTop: 24,
  },
  expiresAt: {
    alignItems: 'center',
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
  map: {
    height: Dimensions.get('window').height * 0.2,
    marginVertical: 16,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  sectionContainer: {
    borderColor: Color.MysticGray,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 16,
  },
  time: {
    alignSelf: 'center',
    color: Color.Black,
    fontSize: 16,
    marginTop: 16,
  },
  title: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
})
