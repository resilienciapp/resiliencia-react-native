import { DateTime, Duration } from 'luxon'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { EmptyList } from 'src/components/List/EmptyList'
import { Spinner } from 'src/components/Spinner'
import { useUser } from 'src/gql/hooks/useUser'
import { Color } from 'src/styles/Color'

const getTime = (duration: Duration) => {
  if (duration.years) {
    return `${Math.round(duration.years)}y`
  }
  if (duration.days) {
    return `${Math.round(duration.days)}d`
  }
  if (duration.hours) {
    return `${Math.round(duration.hours)}h`
  }
  if (duration.minutes) {
    return `${Math.round(duration.minutes)}m`
  }
  if (duration.seconds) {
    return `${Math.round(duration.seconds)}s`
  }
}

export const RequestList: React.FunctionComponent = () => {
  const { data, loading, refetch } = useUser()

  const requests = data?.user.subscriptions
    .map(({ marker }) =>
      marker.requests.map(request => ({ ...request, name: marker.name })),
    )
    .flat()
    .sort(
      (a, b) =>
        DateTime.fromISO(b.createdAt).diff(DateTime.fromISO(a.createdAt))
          .milliseconds,
    )

  if (!data && loading) {
    return <Spinner />
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={requests}
      extraData={requests?.length}
      ListEmptyComponent={EmptyList}
      onRefresh={refetch}
      refreshing={loading}
      renderItem={({ item: { createdAt, description, id, name } }) => (
        <TouchableOpacity key={id} style={styles.requestContainer}>
          <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.name}>
              {name}
            </Text>
            <Text style={styles.time}>
              {getTime(
                DateTime.local().diff(DateTime.fromISO(createdAt), [
                  'years',
                  'days',
                  'hours',
                  'minutes',
                  'seconds',
                ]),
              )}
            </Text>
          </View>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      )}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.MysticGray,
  },
  contentContainer: {
    flexGrow: 1,
  },
  description: {
    color: Color.Black,
    paddingTop: 4,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  name: {
    color: Color.Black,
    flex: 1,
    fontWeight: '500',
  },
  requestContainer: {
    borderTopColor: Color.White,
    borderTopWidth: 1,
    justifyContent: 'center',
    padding: 16,
  },
  time: {
    color: Color.Steel,
    paddingLeft: 4,
    textAlign: 'right',
  },
})
