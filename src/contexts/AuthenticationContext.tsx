import { useApolloClient } from '@apollo/client'
import notifee from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  getItem,
  LocalStorageItem,
  removeItem,
  setItem,
} from 'src/common/localStorage'

interface Props {
  isAuthenticated: boolean
  signIn(token: string): void
  signOut(): void
}

const AuthenticationContext = createContext({} as Props)

export const AuthenticationProvider: React.FunctionComponent = ({
  children,
}) => {
  const client = useApolloClient()

  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    getItem(LocalStorageItem.JWT).then(setToken)
  }, [])

  const signIn = async (token: string) => {
    setToken(token)
    await setItem(LocalStorageItem.JWT, token)
  }

  const signOut = async () => {
    setToken(null)
    await removeItem(LocalStorageItem.JWT)
    await client.clearStore()
    await messaging().deleteToken()
    await notifee.cancelAllNotifications()
  }

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: Boolean(token), signIn, signOut }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => useContext(AuthenticationContext)
