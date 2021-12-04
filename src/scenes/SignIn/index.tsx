import React, { useRef, useState } from 'react'
import { Keyboard, StyleSheet } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import { focusNextRef } from 'src/common/references'
import { Button, ButtonMode } from 'src/components/Button'
import { InputText } from 'src/components/TextInput'
import { useSignIn } from 'src/gql/hooks/useSignIn'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { validator } from 'src/validator'

export const SignIn: RouteComponent<Route.SignIn> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const { signIn } = useSignIn()

  const navigateToSignUp = () => {
    navigation.navigate(Route.SignUp)
  }

  const validateEmail = () => {
    setEmailError(!!email && !validator.email(email))
  }

  const buttonDisabled = !email || !validator.email(email) || !password

  return (
    <SafeAreaView style={styles.container}>
      <InputText
        error={emailError}
        keyboardType="email-address"
        onBlur={validateEmail}
        onChangeText={setEmail}
        onFocus={() => setEmailError(false)}
        onSubmitEditing={focusNextRef(passwordRef)}
        placeholder={strings.email}
        secureTextEntry={false}
        textContentType="emailAddress"
      />
      <InputText
        onChangeText={setPassword}
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
        onPress={signIn({ email, password })}
        text={strings.signIn}
      />
      <Button
        mode={ButtonMode.Secondary}
        onPress={navigateToSignUp}
        text={strings.signUp}
      />
    </SafeAreaView>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    email: 'Email',
    password: 'Password',
    signIn: 'Sign in',
    signUp: 'Create an account',
  },
  'es-UY': {
    email: 'Correo electrónico',
    password: 'Contraseña',
    signIn: 'Iniciar sesión',
    signUp: 'Crear una cuenta',
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
