import React, { createContext, useContext, useState } from 'react'
import { localStorage, LocalStorageItem } from 'src/common/localStorage'

interface Props {
  isAuthenticated: boolean
  signIn(token: string): void
  signOut(): void
}

const AuthContext = createContext({} as Props)

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getString(LocalStorageItem.JWT),
  )

  const signIn = (token: string) => {
    localStorage.set(LocalStorageItem.JWT, token)
    setToken(token)
  }

  const signOut = () => {
    localStorage.delete(LocalStorageItem.JWT)
    setToken(undefined)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: Boolean(token), signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
