import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ButtonMode } from 'src/components/Button'
import { useSignIn } from 'src/gql/hooks/useSignIn'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

export const SignIn: RouteComponent<Route.SignIn> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useSignIn()

  const navigateToSignUp = () => {
    navigation.navigate(Route.SignUp)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        blurOnSubmit={false}
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder={strings.email}
        placeholderTextColor={Color.Steel}
        returnKeyType="next"
        secureTextEntry={false}
        style={styles.input}
        underlineColorAndroid={Color.Black}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        blurOnSubmit={false}
        keyboardType="default"
        onChangeText={setPassword}
        onSubmitEditing={Keyboard.dismiss}
        placeholder={strings.password}
        placeholderTextColor={Color.Steel}
        returnKeyType="next"
        style={styles.input}
        underlineColorAndroid={Color.Black}
      />
      <Button
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
  input: {
    borderColor: Color.Steel,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    marginVertical: 15,
    padding: 10,
    width: '100%',
  },
})
