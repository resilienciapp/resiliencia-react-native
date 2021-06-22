import React, { createContext, useContext } from 'react'

import { useAuthorization } from './useAuthorization'

interface Props {
  token: string | null
  storeToken(token: string): void
}

const AuthContext = createContext({} as Props)

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const values = useAuthorization()

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
