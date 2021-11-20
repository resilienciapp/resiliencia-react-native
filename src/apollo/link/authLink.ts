import { setContext } from '@apollo/client/link/context'
import { localStorage, LocalStorageItem } from 'src/common/localStorage'

export const authLink = setContext((_, context) => {
  const token = localStorage.getString(LocalStorageItem.JWT)

  if (token) {
    return {
      ...context,
      headers: {
        ...context.headers,
        authorization: token,
      },
    }
  }

  return context
})
