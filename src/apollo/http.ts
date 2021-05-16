import { createHttpLink } from '@apollo/client'
import { Platform } from 'react-native'
import { format } from 'util'

// export const uri = format(
//   '%s://%s:%s/graphql',
//   process.env.API_SCHEME || 'http',
//   process.env.API_HOST || (Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'),
//   process.env.API_PORT || 4000,
// )
export const uri = 'http://localhost:4000/graphql'

export const http = createHttpLink({ uri })
