import { useNavigation } from '@react-navigation/core'
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

import { Button, ButtonMode } from '../../components/Button'
import { Routes } from '../../routes/Routes'
import { Colors } from '../../styles/Colors'
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

export const SignUp: React.FunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { navigate } = useNavigation()
  const { signUp } = useSignUp()

  const navigateToSignIn = () => navigate(Routes.SignIn)

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
          placeholderTextColor={Colors.Placeholder}
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
          placeholderTextColor={Colors.Placeholder}
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
          placeholderTextColor={Colors.Placeholder}
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
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: Colors.Border,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    marginVertical: 15,
    padding: 10,
    width: '100%',
  },
  inputError: {
    borderColor: Colors.Error,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
})
