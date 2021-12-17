import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Person from 'src/assets/person.svg'
import { Button, ButtonMode } from 'src/components/Button'
import { List } from 'src/components/List'
import { Spinner } from 'src/components/Spinner'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useUser } from 'src/gql/hooks/useUser'
import { UserQuery_user_subscriptions as Subscription } from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { EventItem } from './EventItem'
import { SubscriptionItem } from './SubscriptionItem'

export const Profile: RouteComponent<Route.Profile> = ({ navigation }) => {
  const { signOut } = useAuthenticationContext()
  const { data, loading } = useUser()

  if (loading) {
    return <Spinner color={Color.Blue} />
  }

  if (!data) {
    return null
  }

  const navigateToDetail = (item: Subscription) => () =>
    navigation.navigate(Route.Details, item)

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Person style={styles.placeholder} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.infoHeader}>
            {data.user.profile.name}
          </Text>
          <Text numberOfLines={1} style={styles.infoEmail}>
            {data.user.profile.email}
          </Text>
        </View>
      </View>
      <List
        data={data.user.subscriptions}
        header={strings.subscriptions}
        renderItem={({ item }) => (
          <SubscriptionItem
            name={item.marker.name}
            category={item.marker.category.name}
            onPress={navigateToDetail(item)}
          />
        )}
      />
      <List
        data={data.user.events}
        header={strings.events}
        renderItem={({ item }) => (
          <EventItem
            name={item.marker.name}
            category={item.marker.category.name}
            onPress={navigateToDetail(item)}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode={ButtonMode.Primary}
          text={strings.logout}
          onPress={signOut}
        />
      </View>
    </View>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    events: 'My Events',
    logout: 'Log out',
    subscriptions: 'Subscriptions',
  },
  'es-UY': {
    events: 'Mis Eventos',
    logout: 'Cerrar sesión',
    subscriptions: 'Subscripciones',
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
    alignItems: 'center',
    backgroundColor: Color.White,
    flex: 1,
    padding: 16,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: Color.MysticGray,
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  infoEmail: {
    color: Color.Steel,
  },
  infoHeader: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  placeholder: {
    backgroundColor: Color.White,
    borderRadius: 16,
    overflow: 'hidden',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
})
