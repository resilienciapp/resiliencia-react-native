import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'

const hasPermission = (
  authorizationStatus: FirebaseMessagingTypes.AuthorizationStatus,
) =>
  authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL

export const requestMessagingPermission = async () => {
  const authorizationStatus = await messaging().hasPermission()

  if (!hasPermission(authorizationStatus)) {
    const requestStatus = await messaging().requestPermission()

    return hasPermission(requestStatus)
  }

  return true
}
