import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import Person from 'src/assets/person.svg'
import { Button, ButtonMode } from 'src/components/Button'
import { Checkbox } from 'src/components/Checkbox'
import { List } from 'src/components/List'
import { useAuthenticationContext } from 'src/contexts/AuthenticationContext'
import { useSelectedCategoriesContext } from 'src/contexts/SelectedCategoriesContext'
import { useCategories } from 'src/gql/hooks/useCategories'
import { useLazyUser } from 'src/gql/hooks/useLazyUser'
import { Color } from 'src/styles/Color'

import { RootNavigator } from './RootNavigator'
import { Route } from './Route'
import { Drawer } from './Stack'

const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { isAuthenticated, signOut } = useAuthenticationContext()
  const [getUser, { data }] = useLazyUser()

  useEffect(() => {
    if (isAuthenticated) {
      getUser()
    }
  }, [])

  const { categories } = useCategories()

  const { selectedCategories, toggleCategorySelected } =
    useSelectedCategoriesContext()

  const navigateToProfile = () => {
    navigation.closeDrawer()
    setTimeout(() => {
      navigation.navigate(Route.Profile)
    }, 300)
  }

  const navigateToSignIn = () => {
    navigation.closeDrawer()
    setTimeout(() => {
      navigation.navigate(Route.SignIn)
    }, 300)
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <List
        data={categories}
        header={strings.categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={toggleCategorySelected(index)}
            style={styles.categoriesFilterContainer}>
            <Checkbox
              checked={selectedCategories[index]}
              onPress={toggleCategorySelected(index)}
              style={styles.categoriesFilterItem}
            />
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
      {isAuthenticated ? (
        <View style={styles.authenticatedContainer}>
          <TouchableOpacity style={styles.button} onPress={signOut}>
            <Text style={styles.text}>{strings.signOut}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToProfile} style={styles.profile}>
            <Person height={35} style={styles.placeholder} width={35} />
            <Text style={styles.textBold}>
              {data?.user.profile.name ?? strings.profile}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Button
          onPress={navigateToSignIn}
          mode={ButtonMode.Primary}
          text={strings.signIn}
        />
      )}
    </SafeAreaView>
  )
}

export const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerStyle: {
        backgroundColor: Color.Transparent,
        width: Dimensions.get('window').width / 1.75,
      },
      drawerType: 'front',
      headerShown: false,
    }}>
    <Drawer.Screen name={Route.RootNavigator} component={RootNavigator} />
  </Drawer.Navigator>
)

const strings = new LocalizedStrings({
  'en-US': {
    categories: 'Categories',
    profile: 'Profile',
    signIn: 'Sign In',
    signOut: 'Log out',
  },
  'es-UY': {
    categories: 'Categorías',
    profile: 'Perfil',
    signIn: 'Iniciar sesión',
    signOut: 'Cerrar sesión',
  },
})

const styles = StyleSheet.create({
  authenticatedContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  button: {
    padding: 16,
  },
  categoriesFilterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoriesFilterItem: {
    height: 20,
    marginRight: 8,
    width: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Color.White,
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  dot: {
    borderRadius: 20,
    height: 10,
    marginRight: 8,
    width: 10,
  },
  list: {
    backgroundColor: Color.White,
    borderBottomWidth: 1,
    borderColor: Color.MysticGray,
  },
  placeholder: {
    backgroundColor: Color.MysticGray,
    borderRadius: 16,
    marginRight: 8,
    overflow: 'hidden',
  },
  profile: {
    alignItems: 'center',
    borderColor: Color.MysticGray,
    borderTopWidth: 1,
    paddingTop: 16,
  },
  text: {
    color: Color.Black,
  },
  textBold: {
    color: Color.Black,
    fontWeight: 'bold',
    paddingTop: 8,
  },
})
