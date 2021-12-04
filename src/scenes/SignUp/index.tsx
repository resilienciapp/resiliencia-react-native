import React, { useRef, useState } from 'react'
import { Keyboard, StyleSheet } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import { focusNextRef } from 'src/common/references'
import { Button, ButtonMode } from 'src/components/Button'
import { InputText } from 'src/components/TextInput'
import { useSignUp } from 'src/gql/hooks/useSignUp'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { validator } from 'src/validator'

export const SignUp: RouteComponent<Route.SignUp> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const { signUp } = useSignUp()

  const navigateToSignIn = () => {
    navigation.navigate(Route.SignIn)
  }

  const validateEmail = () => {
    setEmailError(!!email && !validator.email(email))
  }

  const validatePassword = () => {
    setPasswordError(!!password && !validator.password(password))
  }

  const buttonDisabled =
    !name ||
    !email ||
    !validator.email(email) ||
    !password ||
    !validator.password(password)

  return (
    <SafeAreaView style={styles.container}>
      <InputText
        autoCapitalize="words"
        onChangeText={setName}
        onSubmitEditing={focusNextRef(emailRef)}
        placeholder={strings.name}
      />
      <InputText
        error={emailError}
        keyboardType="email-address"
        onBlur={validateEmail}
        onChangeText={setEmail}
        onFocus={() => setEmailError(false)}
        onSubmitEditing={focusNextRef(passwordRef)}
        placeholder={strings.email}
        reference={emailRef}
        textContentType="emailAddress"
      />
      <InputText
        error={passwordError}
        onChangeText={setPassword}
        onBlur={validatePassword}
        onFocus={() => setPasswordError(false)}
        onSubmitEditing={Keyboard.dismiss}
        placeholder={strings.password}
        reference={passwordRef}
        returnKeyType="done"
        secureTextEntry={true}
        textContentType="password"
      />
      <Button
        disabled={buttonDisabled}
        mode={ButtonMode.Primary}
        onPress={signUp({ email, name, password })}
        text={strings.register}
      />
      <Button
        mode={ButtonMode.Secondary}
        onPress={navigateToSignIn}
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
})
