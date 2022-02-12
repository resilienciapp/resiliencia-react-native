import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'
import { Platform } from 'react-native'
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions'

const Permission =
  Platform.OS === 'android'
    ? {
        LOCATION: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      }
    : {
        LOCATION: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }

const hasMessagingPermission = (
  authorizationStatus: FirebaseMessagingTypes.AuthorizationStatus,
) =>
  authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL

export const requestMessagingPermission = async () => {
  const authorizationStatus = await messaging().hasPermission()

  if (!hasMessagingPermission(authorizationStatus)) {
    const requestStatus = await messaging().requestPermission()

    return hasMessagingPermission(requestStatus)
  }

  return true
}

export const checkLocationPermission = async () => {
  const permissionStatus = await check(Permission.LOCATION)

  if (permissionStatus === RESULTS.GRANTED) {
    return
  }

  if (permissionStatus === RESULTS.DENIED) {
    await request(Permission.LOCATION)
  }
}
