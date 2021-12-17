import { useApolloClient } from '@apollo/client'
import React, { createContext, useContext, useState } from 'react'
import { localStorage, LocalStorageItem } from 'src/common/localStorage'

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

  const [token, setToken] = useState(
    localStorage.getString(LocalStorageItem.JWT),
  )

  const signIn = (token: string) => {
    setToken(token)
    localStorage.set(LocalStorageItem.JWT, token)
  }

  const signOut = async () => {
    setToken(undefined)
    localStorage.delete(LocalStorageItem.JWT)
    await client.clearStore()
  }

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: Boolean(token), signIn, signOut }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => useContext(AuthenticationContext)
