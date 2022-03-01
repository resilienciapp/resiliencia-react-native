import notifee, { AndroidStyle, EventType } from '@notifee/react-native'
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
import { Color } from 'src/styles/Color'

export enum Notification {
  EVENT_ADMINISTRATION_REQUEST = 'EVENT_ADMINISTRATION_REQUEST',
  EVENT_ADMINISTRATION_RESPONSE = 'EVENT_ADMINISTRATION_RESPONSE',
  MARKER_REQUEST = 'MARKER_REQUEST',
}

type Payload = {
  [Notification.EVENT_ADMINISTRATION_REQUEST]: {
    markerId: string
    markerName: string
    type: Notification.EVENT_ADMINISTRATION_REQUEST
  }
  [Notification.EVENT_ADMINISTRATION_RESPONSE]: {
    markerId: string
    markerName: string
    type: Notification.EVENT_ADMINISTRATION_RESPONSE
  }
  [Notification.MARKER_REQUEST]: {
    markerId: string
    markerName: string
    requestId: string
    type: Notification.MARKER_REQUEST
  }
}

type Data =
  | Payload[Notification.EVENT_ADMINISTRATION_REQUEST]
  | Payload[Notification.EVENT_ADMINISTRATION_RESPONSE]
  | Payload[Notification.EVENT_ADMINISTRATION_RESPONSE]

const displayNotification = async (data: Data) => {
  const channelId = await notifee.createChannel({
    id: data.type,
    name: strings[data.type].channel,
  })

  return notifee.displayNotification({
    android: {
      channelId,
      color: Color.SkyBlue,
      pressAction: {
        id: data.markerId + new Date().toISOString(),
        launchActivity: `${DeviceInfo.getBundleId()}.MainActivity`,
      },
      showTimestamp: true,
      smallIcon: 'ic_launcher_white',
      style: { text: strings[data.type].body, type: AndroidStyle.BIGTEXT },
      timestamp: Date.now(),
    },
    body: strings[data.type].body,
    data,
    title: strings[data.type].title,
  })
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

    if (
      data.type === Notification.EVENT_ADMINISTRATION_REQUEST ||
      data.type === Notification.EVENT_ADMINISTRATION_RESPONSE ||
      data.type === Notification.MARKER_REQUEST
    ) {
      await displayNotification(data as Data)
    }
  })
}

export const useOnNotification = () => {
  const { showInfoMessage } = useFlashCardContext()
  const [refreshUser] = useLazyUser('network-only')

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async ({ data }) => {
      if (!data) {
        return
      }

      if (
        data.type === Notification.EVENT_ADMINISTRATION_REQUEST ||
        data.type === Notification.EVENT_ADMINISTRATION_RESPONSE ||
        data.type === Notification.MARKER_REQUEST
      ) {
        const payload = data as Payload[Notification.MARKER_REQUEST]
        await refreshUser()
        await displayNotification(data as Data)
        showInfoMessage(
          strings.formatString(
            strings[data.type].inside,
            payload.markerName,
          ) as string,
        )
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
  en: {
    [Notification.EVENT_ADMINISTRATION_REQUEST]: {
      body: 'You have a new admin request',
      channel: 'New admin request',
      inside: '{0} just received an admin request.',
      title: 'New admin request',
    },
    [Notification.EVENT_ADMINISTRATION_RESPONSE]: {
      body: 'Your admin request has been answered. Tap to see the answer',
      channel: 'New admin response',
      inside: '{0} just answered your admin request.',
      title: 'New admin response',
    },
    [Notification.MARKER_REQUEST]: {
      body: 'Tap to see the new request of the subscribed events',
      channel: 'New request',
      inside: '{0} just made a new request.',
      title: 'New request',
    },
  },
  es: {
    [Notification.EVENT_ADMINISTRATION_REQUEST]: {
      body: 'Toca para ver la nueva solicitud de administración',
      channel: 'Nueva solicitud',
      inside: 'Acabas de recibir una solicitud de administración para {0}.',
      title: 'Nueva solicitud',
    },
    [Notification.EVENT_ADMINISTRATION_RESPONSE]: {
      body: 'Han respondido tu solicitud de administrador. Toca para ver la respuesta',
      channel: 'Nueva respuesta',
      inside: '{0} acaba de responder tu solicitud de administrador.',
      title: 'Nueva respuesta',
    },
    [Notification.MARKER_REQUEST]: {
      body: 'Toca para ver el nuevo pedido de los eventos suscritos',
      channel: 'Nuevo pedido',
      inside: '{0} acaba de realizar un nuevo pedido.',
      title: 'Nuevo pedido',
    },
  },
})
