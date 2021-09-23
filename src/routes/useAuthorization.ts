import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

export const useAuthorization = () => {
  const [token, setToken] = useState<string | null>(null)

  AsyncStorage.getItem('JWT').then(setToken)

  const storeToken = async (token: string) => {
    console.log('store')
    await AsyncStorage.setItem('JWT', token)
    setToken(token)
  }

  const deleteToken = async () => {
    await AsyncStorage.removeItem('JWT')
    setToken('')
  }

  return {
    deleteToken,
    storeToken,
    token,
  }
}
