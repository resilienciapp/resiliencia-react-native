import { isEmail } from 'class-validator'
import React, { useState } from 'react'
import {
  Alert,
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

import { useSignUp } from './useSignUp'

const isValidEmail = (email?: string) => isEmail(email)

const isValidPassword = (password?: string) => {
  if (!password) {
    return false
  }

  const expression = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  )

  return expression.test(password)
}

export const SignUp: RouteComponent<Route.SignUp> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useSignUp()

  const navigateToSignIn = () => navigation.navigate(Route.SignIn)

  const onSignUp = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      signUp({ email, name, password })
    } else {
      Alert.alert('Error', 'Invalid email or password', [{ text: 'OK' }])
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          style={styles.input}
          placeholder={strings.name}
          placeholderTextColor={Color.MysticGray}
          onChangeText={setName}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={false}
          underlineColorAndroid="black"
          returnKeyType="next"
        />
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder={strings.email}
          placeholderTextColor={Color.MysticGray}
          style={[
            styles.input,
            !isValidEmail(email) && email != '' && styles.inputError,
          ]}
          secureTextEntry={false}
          returnKeyType="next"
          underlineColorAndroid="black"
          blurOnSubmit={false}
        />
        <TextInput
          style={[
            styles.input,
            !isValidPassword(password) && password != '' && styles.inputError,
          ]}
          onChangeText={setPassword}
          placeholder={strings.password}
          placeholderTextColor={Color.MysticGray}
          blurOnSubmit={false}
          secureTextEntry={true}
          underlineColorAndroid="black"
          returnKeyType="next"
        />
        <Button
          mode={ButtonMode.Primary}
          text={strings.register}
          onButtonPressed={onSignUp}
        />
        <Button
          mode={ButtonMode.Secondary}
          text={strings.signIn}
          onButtonPressed={navigateToSignIn}
        />
      </ScrollView>
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
  inputError: {
    borderColor: Color.Red,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
})
