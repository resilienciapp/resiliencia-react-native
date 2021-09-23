import { ContextSetter, setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const contextSetter: ContextSetter = async (_, context) => {
  const token = await AsyncStorage.getItem('JWT')
  console.log('########## token: ', token)

  if (token != null) {
    return {
      ...context,
      headers: {
        ...context.headers,
        authorization: token ? token : null,
      },
    }
  } else {
    return {
      ...context,
      headers: {
        ...context.headers,
      },
    }
  }
}

export const auth = setContext(contextSetter)
