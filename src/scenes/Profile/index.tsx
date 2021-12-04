import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import Person from 'src/assets/person.svg'
import { Button, ButtonMode } from 'src/components/Button'
import { Spinner } from 'src/components/Spinner'
import { useUser } from 'src/gql/hooks/useUser'
import { UserQuery_user_subscriptions as Subscription } from 'src/gql/types'
import { useAuthContext } from 'src/routes/AuthContext'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { EmptyList } from './EmptyList'
import { SubscriptionItem } from './SubscriptionItem'

export const Profile: RouteComponent<Route.Profile> = ({ navigation }) => {
  const { signOut } = useAuthContext()
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
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Person style={styles.placeholder} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.infoHeader}>
            {data.user.profile.name}
          </Text>
          <Text numberOfLines={1}>{data.user.profile.email}</Text>
        </View>
      </View>
      <View style={styles.subscriptionsContainer}>
        <Text numberOfLines={1} style={styles.subscriptionsHeader}>
          {strings.subscriptions}
        </Text>
        <FlatList
          data={data.user.subscriptions}
          ListEmptyComponent={EmptyList}
          ItemSeparatorComponent={() => (
            <View style={styles.subscriptionsSeparator} />
          )}
          renderItem={({ item }) => (
            <SubscriptionItem
              name={item.marker.name}
              category={item.marker.category.name}
              onPress={navigateToDetail(item)}
            />
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={ButtonMode.Primary}
          text={strings.logout}
          onPress={signOut}
        />
      </View>
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    logout: 'Log out',
    subscriptions: 'Subscriptions',
  },
  'es-UY': {
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
    backgroundColor: Color.MysticGray,
    flex: 1,
    padding: 8,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: Color.White,
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  placeholder: {
    backgroundColor: Color.MysticGray,
    borderRadius: 16,
    overflow: 'hidden',
  },
  subscriptionsContainer: {
    backgroundColor: Color.White,
    borderRadius: 16,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: '100%',
  },
  subscriptionsHeader: {
    fontSize: 18,
    paddingBottom: 16,
  },
  subscriptionsSeparator: {
    height: 16,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
})
