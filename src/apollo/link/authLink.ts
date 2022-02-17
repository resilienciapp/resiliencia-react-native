import { setContext } from '@apollo/client/link/context'
import { getItem, LocalStorageItem } from 'src/common/localStorage'

export const authLink = setContext(async (_, context) => {
  const token = await getItem(LocalStorageItem.JWT)

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
