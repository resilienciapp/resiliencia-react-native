import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Button, ButtonMode } from 'src/components/Button'
import { SubscriptionItem } from 'src/components/SubscriptionItem'
import { UserQuery_user_subscriptions as Subscription } from 'src/gql/types'
import { useAuthContext } from 'src/routes/AuthContext'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { PersonalInfo } from './PersonalInfo'
import { useUser } from './useUser'

export const Profile: RouteComponent<Route.Profile> = ({ navigation }) => {
  const { signOut } = useAuthContext()
  const { data } = useUser()

  if (!data) {
    return null
  }

  const navigateToDetail = (item: Subscription) => () =>
    navigation.navigate(Route.Details, item)

  return (
    <View style={styles.container}>
      <PersonalInfo />
      <FlatList
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        data={data.user.subscriptions}
        renderItem={({ item }) => (
          <SubscriptionItem
            name={item.marker.name}
            category={item.marker.category}
            onItemPress={navigateToDetail(item)}
          />
        )}
        ListHeaderComponent={
          <Text style={styles.headerTitle}>Subscriptions</Text>
        }
        stickyHeaderIndices={[0]}
        style={styles.list}
      />
      <Button
        style={styles.button}
        mode={ButtonMode.Primary}
        text={strings.logout}
        onButtonPressed={signOut}
      />
    </View>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    logout: 'Log out',
  },
  'es-UY': {
    logout: 'Cerrar sesión',
  },
})

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    margin: 16,
  },
  container: {
    flex: 1,
  },
  headerTitle: {
    backgroundColor: Color.White,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },
  itemSeparator: {
    backgroundColor: Color.White,
    marginVertical: 5,
  },
  list: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 2,
  },
})
