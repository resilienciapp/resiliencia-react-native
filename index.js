import { AppRegistry } from 'react-native'
import { setBackgroundMessageHandler } from 'src/common/notifications'

import { name as appName } from './app.json'
import { App } from './src'

setBackgroundMessageHandler()

AppRegistry.registerComponent(appName, () => App)
