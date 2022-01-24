import notifee, { EventType } from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import LocalizedStrings from 'react-native-localization'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { useLazyUser } from 'src/gql/hooks/useLazyUser'
import { Route } from 'src/routes/Route'
import { ParamList } from 'src/routes/Stack'

export enum Notification {
  MARKER_REQUEST = 'MARKER_REQUEST',
}

export type Payload = {
  [Notification.MARKER_REQUEST]: {
    description: string
    markerId: string
    markerName: string
    requestId: string
  }
}

export const setBackgroundMessageHandler = () => {
  notifee.onBackgroundEvent(
    async ({ type, detail: { notification, pressAction } }) => {
      if (
        notification?.id &&
        type === EventType.ACTION_PRESS &&
        pressAction?.id === 'mark-as-read'
      ) {
        await notifee.cancelNotification(notification.id)
      }
    },
  )

  messaging().setBackgroundMessageHandler(async ({ data }) => {
    if (!data) {
      return
    }

    switch (data.type) {
      case Notification.MARKER_REQUEST:
        {
          const channelId = await notifee.createChannel({
            id: Notification.MARKER_REQUEST,
            name: strings.markerRequestChannel,
          })

          await notifee.displayNotification({
            android: {
              channelId,
              pressAction: {
                id: data.requestId,
                launchActivity: `${DeviceInfo.getBundleId()}.MainActivity`,
              },
            },
            body: `${data.markerName} - ${data.description}`,
            data,
            title: strings.markerRequest,
          })
        }
        break
    }
  })
}

export const useOnNotification = () => {
  const { showInfoMessage } = useFlashCardContext()
  const [refreshUser] = useLazyUser()

  useEffect(() => {
    const unsubscribe = messaging().onMessage(({ data }) => {
      switch (data?.type) {
        case Notification.MARKER_REQUEST:
          {
            const payload = data as Payload[Notification.MARKER_REQUEST]
            showInfoMessage(`${payload.markerName} - ${payload.description}`)
            refreshUser()
          }
          break
      }
    })

    return unsubscribe
  }, [])
}

export const useInitialNotification = () => {
  const { navigate } = useNavigation<NavigationProp<ParamList>>()
  const appState = useRef(AppState.currentState)

  useEffect(() => {
    const checkNotifications = async () => {
      const initialNotification = await notifee.getInitialNotification()

      setTimeout(() => {
        if (initialNotification?.notification.data) {
          navigate(Route.Details, {
            markerId: Number(initialNotification.notification.data.markerId),
          })
        }
      }, 500)
    }

    checkNotifications()

    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          const initialNotification = await notifee.getInitialNotification()

          setTimeout(() => {
            if (initialNotification?.notification.data) {
              navigate(Route.Details, {
                markerId: Number(
                  initialNotification.notification.data.markerId,
                ),
              })
            }
          }, 500)
        }

        appState.current = nextAppState
      },
    )

    return subscription.remove
  }, [])
}

const strings = new LocalizedStrings({
  'en-US': {
    markerRequest: 'You have a new request',
    markerRequestChannel: 'New request',
  },
  'es-UY': {
    markerRequest: 'Tienes un nuevo pedido',
    markerRequestChannel: 'Nuevo pedido',
  },
})
