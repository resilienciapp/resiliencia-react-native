import { gql, useQuery } from '@apollo/client'
import { AppVersion } from 'src/gql/types'

const AppVersionQuery = gql`
  query AppVersion {
    appVersion {
      android
      ios
    }
  }
`

export const useAppVersion = () => useQuery<AppVersion>(AppVersionQuery)
