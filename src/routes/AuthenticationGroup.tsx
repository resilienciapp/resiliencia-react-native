import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Popover from 'react-native-popover-view'
import Info from 'src/assets/info.svg'
import { SignIn } from 'src/scenes/SignIn'
import { SignUp } from 'src/scenes/SignUp'
import { Color } from 'src/styles/Color'

import { Route } from './Route'
import { Stack } from './Stack'

export const AuthenticationGroup = (
  <Stack.Group>
    <Stack.Screen
      component={SignUp}
      name={Route.SignUp}
      options={{
        headerRight: () => (
          <Popover
            arrowStyle={styles.arrow}
            popoverStyle={styles.popover}
            from={
              <TouchableOpacity>
                <Info height={25} width={25} />
              </TouchableOpacity>
            }
            // @ts-ignore
            statusBarTranslucent={true}>
            <View style={styles.container}>
              <Text style={styles.header}>{strings.popover.header}</Text>
              <Text style={styles.description}>
                {strings.popover.description}
              </Text>
            </View>
          </Popover>
        ),
      }}
    />
    <Stack.Screen component={SignIn} name={Route.SignIn} />
  </Stack.Group>
)

const strings = new LocalizedStrings({
  en: {
    popover: {
      description:
        '• At least 1 uppercase\n• At least 1 lowercase\n• At least 1 number\n• At least 1 special character\n• At least 8 characters',
      header: 'Password requirements',
    },
  },
  es: {
    popover: {
      description:
        '• Al menos 1 mayúscula\n• Al menos 1 minúscula\n• Al menos 1 número\n• Al menos 1 carácter especial\n• Al menos 8 caracteres',
      header: 'Requisitos de contraseña',
    },
  },
})

const styles = StyleSheet.create({
  arrow: {
    width: 12,
  },
  container: {
    padding: 16,
  },
  description: {
    color: Color.Black,
    fontSize: 13,
    lineHeight: 24,
  },
  header: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  popover: {
    borderRadius: 16,
    borderTopRightRadius: 10,
  },
})
