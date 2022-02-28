import React, { useRef, useState } from 'react'
import { Keyboard, View } from 'react-native'
import { focusNextRef } from 'src/common/references'
import { Button, ButtonMode } from 'src/components/Button'
import { InputText } from 'src/components/InputText'
import { useSignUp } from 'src/gql/hooks/useSignUp'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { validator } from 'src/validator'

import { strings } from './strings'
import { styles } from './styles'

export const SignUp: RouteComponent<Route.SignUp> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const { loading, signUp } = useSignUp()

  const navigateToSignIn = () => {
    navigation.navigate(Route.SignIn)
  }

  const validateEmail = () => {
    setEmailError(!!email && !validator.email(email))
  }

  const validatePassword = () => {
    setPasswordError(!!password && !validator.password(password))
  }

  const toggleSecureTextEntry = () => setSecureTextEntry(!secureTextEntry)

  const buttonDisabled =
    !name ||
    !email ||
    !validator.email(email) ||
    !password ||
    !validator.password(password) ||
    loading

  return (
    <View style={styles.container}>
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
        secureTextEntry={secureTextEntry}
        textContentType="password"
        toggleSecureTextEntry={toggleSecureTextEntry}
      />
      <Button
        disabled={buttonDisabled}
        mode={ButtonMode.Primary}
        onPress={signUp({ email: email.trim(), name: name.trim(), password })}
        text={strings.register}
      />
      <Button
        mode={ButtonMode.Secondary}
        onPress={navigateToSignIn}
        text={strings.signIn}
      />
    </View>
  )
}
