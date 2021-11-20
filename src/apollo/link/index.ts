import { from } from '@apollo/client'

import { authLink } from './authLink'
import { httpLink } from './httpLink'

export const link = from([authLink, httpLink])
