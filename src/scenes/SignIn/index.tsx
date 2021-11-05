import React, { useState } from 'react'
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { Button, ButtonMode } from 'src/components/Button'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { useSignIn } from './useSignIn'

export const SignIn: RouteComponent<Route.SignIn> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useSignIn()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder={strings.email}
          placeholderTextColor={Color.MysticGray}
          style={styles.input}
          onChangeText={setEmail}
          secureTextEntry={false}
          returnKeyType="next"
          underlineColorAndroid={Color.Black}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder={strings.password}
          placeholderTextColor={Color.MysticGray}
          keyboardType="default"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          underlineColorAndroid={Color.Black}
          returnKeyType="next"
        />
        <Button
          mode={ButtonMode.Primary}
          text={strings.signIn}
          onButtonPressed={signIn({ email, password })}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    email: 'Email',
    password: 'Password',
    signIn: 'Log in',
  },
  'es-UY': {
    email: 'Email',
    password: 'Contraseña',
    signIn: 'Iniciar sesión',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: Color.Gray,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    marginVertical: 15,
    padding: 10,
    width: '100%',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    margin: 10,
    marginHorizontal: 35,
    marginTop: 20,
  },
})
