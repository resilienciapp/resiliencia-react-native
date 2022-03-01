import React, { useCallback } from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import react from 'src/assets/images/react.png'
import { shouldUpdateApp } from 'src/common/version'
import { useAppVersion } from 'src/gql/hooks/useAppVersion'
import { Platform as PlatformType } from 'src/gql/types'
import { Color } from 'src/styles/Color'

import { Button, ButtonMode } from './Button'

const spinValue = new Animated.Value(0)

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
})

export const UpdateCard: React.FunctionComponent = () => {
  const { data, error, loading, refetch } = useAppVersion()

  Animated.loop(
    Animated.timing(spinValue, {
      delay: 350,
      duration: 3000,
      easing: Easing.linear,
      toValue: 1,
      useNativeDriver: true,
    }),
  ).start()

  const tryAgain = useCallback(() => {
    refetch()
  }, [])

  if (
    loading ||
    (data && shouldUpdateApp(data.appVersion[Platform.OS as PlatformType])) ||
    error
  ) {
    return (
      <Animated.View style={[StyleSheet.absoluteFill, styles.container]}>
        <Animated.Image
          fadeDuration={0}
          resizeMode="contain"
          source={react}
          style={[styles.image, { transform: [{ rotate: spin }] }]}
        />
        {(data || error) && (
          <View style={styles.infoContainer}>
            {error ? (
              <>
                <Text style={styles.header}>{strings.error.header}</Text>
                <Text style={styles.description}>
                  {strings.error.description}
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.header}>
                  {strings.unsupportedVersion.header}
                </Text>
                <Text style={styles.description}>
                  {strings.unsupportedVersion.description}
                </Text>
              </>
            )}
            <Button
              mode={ButtonMode.Primary}
              onPress={tryAgain}
              text={strings.tryAgain}
            />
          </View>
        )}
      </Animated.View>
    )
  }

  return null
}

const strings = new LocalizedStrings({
  en: {
    error: {
      description: 'Error checking app version',
      header: 'Pending verification',
    },
    tryAgain: 'Try again',
    unsupportedVersion: {
      description:
        'To continue using the app it is necessary to update to the latest version',
      header: 'Pending update',
    },
  },
  es: {
    error: {
      description: 'Error al verificar la versión de la aplicación',
      header: 'Verificación pendiente',
    },
    tryAgain: 'Reintentar',
    unsupportedVersion: {
      description:
        'Para continuar usando la aplicación es necesario actualizar a la última versión',
      header: 'Actualización pendiente',
    },
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.Black75Pct,
    flex: 1,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
  },
  description: {
    color: Color.Black,
    fontSize: 14,
    paddingVertical: 8,
    textAlign: 'center',
  },
  header: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 89,
    width: 100,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: Color.White,
    borderRadius: 16,
    bottom: 120,
    justifyContent: 'center',
    padding: 24,
    position: 'absolute',
  },
})
