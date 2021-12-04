import { isEmail } from 'class-validator'
import React, { useRef, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ButtonMode } from 'src/components/Button'
import { useSignUp } from 'src/gql/hooks/useSignUp'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

const isValidEmail = (email?: string) => isEmail(email)

const isValidPassword = (password?: string) => {
  if (!password) {
    return false
  }

  return new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(
    password,
  )
}

const focusNextRef = (ref: React.MutableRefObject<any>) => () =>
  ref.current.focus()

const pressButton = (ref: React.MutableRefObject<any>) => () =>
  ref.current.touchableHandlePress()

export const SignUp: RouteComponent<Route.SignUp> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const buttonRef = useRef(null)

  const { signUp } = useSignUp()

  const navigateToSignIn = () => {
    navigation.navigate(Route.SignIn)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoCorrect={false}
        onChangeText={setName}
        onSubmitEditing={focusNextRef(emailRef)}
        placeholder={strings.name}
        placeholderTextColor={Color.Steel}
        returnKeyType="next"
        style={styles.input}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={setEmail}
        onSubmitEditing={focusNextRef(passwordRef)}
        placeholder={strings.email}
        placeholderTextColor={Color.Steel}
        ref={emailRef}
        returnKeyType="next"
        style={[
          styles.input,
          !isValidEmail(email) && !!email && styles.inputError,
        ]}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
        onSubmitEditing={pressButton(passwordRef)}
        placeholder={strings.password}
        placeholderTextColor={Color.Steel}
        ref={passwordRef}
        returnKeyType="next"
        secureTextEntry={true}
        style={[
          styles.input,
          !isValidPassword(password) && !!password && styles.inputError,
        ]}
      />
      <Button
        disabled={!isValidEmail(email) || !isValidPassword(password)}
        mode={ButtonMode.Primary}
        reference={buttonRef}
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
