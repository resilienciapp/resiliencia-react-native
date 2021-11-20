import { isEmail } from 'class-validator'
import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ButtonMode } from 'src/components/Button'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { useSignUp } from './useSignUp'

const isValidEmail = (email?: string) => isEmail(email)
const isValidPassword = (password?: string) => {
  if (!password) {
    return false
  }

  return new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(
    password,
  )
}

export const SignUp: RouteComponent<Route.SignUp> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useSignUp()

  const navigateToSignIn = () => {
    navigation.navigate(Route.SignIn)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        blurOnSubmit={false}
        onChangeText={setName}
        onSubmitEditing={Keyboard.dismiss}
        placeholder={strings.name}
        placeholderTextColor={Color.Steel}
        returnKeyType="next"
        style={styles.input}
        underlineColorAndroid={Color.Black}
      />
      <TextInput
        autoCapitalize="none"
        blurOnSubmit={false}
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder={strings.email}
        placeholderTextColor={Color.Steel}
        returnKeyType="next"
        secureTextEntry={false}
        style={[
          styles.input,
          !isValidEmail(email) && !!email && styles.inputError,
        ]}
        underlineColorAndroid={Color.Black}
      />
      <TextInput
        blurOnSubmit={false}
        onChangeText={setPassword}
        placeholder={strings.password}
        placeholderTextColor={Color.Steel}
        returnKeyType="next"
        secureTextEntry={true}
        style={[
          styles.input,
          !isValidPassword(password) && !!password && styles.inputError,
        ]}
        underlineColorAndroid={Color.Black}
      />
      <Button
        disabled={!isValidEmail(email) && !isValidPassword(password)}
        mode={ButtonMode.Primary}
        onButtonPressed={signUp({ email, name, password })}
        text={strings.register}
      />
      <Button
        mode={ButtonMode.Secondary}
        onButtonPressed={navigateToSignIn}
        text={strings.signIn}
      />
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    email: 'Email',
    name: 'Name',
    password: 'Password',
    register: 'Register',
    signIn: 'I already have an account',
  },
  'es-UY': {
    email: 'Email',
    name: 'Nombre',
    password: 'Contraseña',
    register: 'Registrarse',
    signIn: 'Ya tengo una cuenta',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderColor: Color.Steel,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    marginVertical: 15,
    padding: 10,
    width: '100%',
  },
  inputError: {
    borderColor: Color.Reddish,
  },
})
