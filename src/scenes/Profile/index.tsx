import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Person from 'src/assets/person.svg'
import { Spinner } from 'src/components/Spinner'
import { useUser } from 'src/gql/hooks/useUser'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { EventsList } from './EventsList'
import { RequestList } from './RequestList'
import { SubscriptionsList } from './SubscriptionsList'

export const Profile: RouteComponent<Route.Profile> = () => {
  const { data, loading } = useUser()
  const [index, setIndex] = useState(0)

  if (loading) {
    return <Spinner color={Color.Blue} />
  }

  if (!data) {
    return null
  }

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
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: RequestList,
          second: SubscriptionsList,
          third: EventsList,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            activeColor={Color.Blue}
            inactiveColor={Color.Steel}
            indicatorStyle={styles.tabBarIndicator}
            pressColor={Color.Transparent}
            renderLabel={({ color, focused, route }) => {
              const fontWeight = focused ? '500' : 'normal'
              return (
                <Text
                  style={[
                    {
                      color,
                      fontWeight,
                      minWidth: Dimensions.get('screen').width / 4,
                    },
                    styles.tabBarLabel,
                  ]}>
                  {route.title}
                </Text>
              )
            }}
            scrollEnabled={true}
            style={styles.tabBarContainer}
            tabStyle={styles.tabBar}
          />
        )}
      />
    </View>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    events: 'My Events',
    requests: 'Active requests',
    subscriptions: 'Subscriptions',
  },
  'es-UY': {
    events: 'Mis Eventos',
    requests: 'Pedidos activos',
    subscriptions: 'Subscripciones',
  },
})

const routes = [
  { key: 'first', title: strings.requests },
  { key: 'second', title: strings.subscriptions },
  { key: 'third', title: strings.events },
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    flex: 1,
  },
  infoContainer: {
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 24,
    marginHorizontal: 16,
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
  tabBar: {
    width: 'auto',
  },
  tabBarContainer: {
    backgroundColor: Color.White,
  },
  tabBarIndicator: {
    backgroundColor: Color.Blue,
  },
  tabBarLabel: {
    paddingHorizontal: 4,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
})
