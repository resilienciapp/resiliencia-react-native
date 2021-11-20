import { HttpLink } from '@apollo/client'
import { Platform } from 'react-native'
import Config from 'react-native-config'
import { format } from 'util'

const uri = format(
  '%s://%s:%s/graphql',
  Config.API_SCHEME || 'http',
  Config.API_HOST || (Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'),
  Config.API_PORT || 4000,
)

export const httpLink = new HttpLink({ uri })
