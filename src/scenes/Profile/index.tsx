import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button, ButtonMode } from '../../components/Button'
import { PersonalInfo } from '../../components/PersonalInfo'
import { useAuthContext } from '../../routes/AuthContext'
import { useUser } from './useUser'

const favorites = [
  {
    description: 'Colonia 1245 esq Yi',
    name: 'Olla Popular Centro',
  },
  {
    description: 'Direccion en Prado',
    name: 'Olla Popular Prado',
  },
  {
    description: 'Peatonal Sarandi 1234',
    name: 'Merendero Ciudad Vieja',
  },
]

export const Profile: React.FunctionComponent = () => {
  const logOut = async () => {
    console.log(data)
    deleteToken()
  }
  const { deleteToken } = useAuthContext()
  const data = useUser()

  return (
    <View style={styles.container}>
      <View style={styles.personalInfoContainer}>
        <PersonalInfo
          name={data?.user.profile.name}
          email={data?.user.profile.email}
        />
      </View>
      <View style={styles.favoritesContainer}></View>
      <Button
        style={styles.button}
        mode={ButtonMode.Primary}
        text={'Log out'}
        onButtonPressed={logOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    margin: 16,
  },
  container: {
    flex: 1,
  },
  favoritesContainer: {
    flex: 2,
  },
  personalInfoContainer: {
    flex: 1,
    marginBottom: 5,
  },
})
