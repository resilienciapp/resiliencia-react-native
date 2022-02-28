import React, { useRef, useState } from 'react'
import { Keyboard, View } from 'react-native'
import { focusNextRef } from 'src/common/references'
import { Button, ButtonMode } from 'src/components/Button'
import { InputText } from 'src/components/InputText'
import { useSignIn } from 'src/gql/hooks/useSignIn'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { validator } from 'src/validator'

import { strings } from './strings'
import { styles } from './styles'

export const SignIn: RouteComponent<Route.SignIn> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const passwordRef = useRef(null)

  const { loading, signIn } = useSignIn()

  const navigateToSignUp = () => {
    navigation.navigate(Route.SignUp)
  }

  const validateEmail = () => {
    setEmailError(!!email && !validator.email(email))
  }

  const toggleSecureTextEntry = () => setSecureTextEntry(!secureTextEntry)

  const buttonDisabled =
    !email || !validator.email(email) || !password || loading

  return (
    <View style={styles.container}>
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
        secureTextEntry={secureTextEntry}
        textContentType="password"
        toggleSecureTextEntry={toggleSecureTextEntry}
      />
      <Button
        disabled={buttonDisabled}
        mode={ButtonMode.Primary}
        onPress={signIn({ email: email.trim(), password })}
        text={strings.signIn}
      />
      <Button
        mode={ButtonMode.Secondary}
        onPress={navigateToSignUp}
        text={strings.signUp}
      />
    </View>
  )
}
