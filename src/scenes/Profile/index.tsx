import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import LocalizedStrings from 'react-native-localization'
import { Button, ButtonMode } from 'src/components/Button'
import { EmptySubscription } from 'src/components/EmptySubscription'
import { PersonalInfo } from 'src/components/PersonalInfo'
import { SubscriptionItem } from 'src/components/SubscriptionItem'
import { UserFragment } from 'src/gql/fragments/user'
import {
  UserQuery as UserQueryData,
  UserQuery_user_subscriptions as Subscription,
} from 'src/gql/types'
import { useAuthContext } from 'src/routes/AuthContext'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

const UserQuery = gql`
  query UserQuery {
    user {
      ...User
    }
  }
  ${UserFragment}
`

export const Profile: RouteComponent<Route.Profile> = ({ navigation }) => {
  const { deleteToken } = useAuthContext()
  const { data } = useQuery<UserQueryData>(UserQuery)

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
        ListEmptyComponent={<EmptySubscription />}
        data={data.user.subscriptions}
        renderItem={({ item }) => (
          <SubscriptionItem
            name={item.marker.name}
            category={item.marker.description}
            onItemPress={navigateToDetail(item)}
          />
        )}
        keyExtractor={index => index.marker.id}
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
        onButtonPressed={deleteToken}
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
