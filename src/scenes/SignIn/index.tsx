import React, { useState } from 'react'
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'

import { Button, ButtonMode } from '../../components/Button'
import { Colors } from '../../styles/Colors'
import { useSignIn } from './useSignIn'

export const SignIn: React.FunctionComponent = () => {
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
          placeholderTextColor={Colors.Placeholder}
          style={styles.input}
          onChangeText={setEmail}
          secureTextEntry={false}
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder={strings.password}
          placeholderTextColor={Colors.Placeholder}
          keyboardType="default"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={true}
          underlineColorAndroid="#f000"
          returnKeyType="next"
        />
        <Button
          mode={ButtonMode.Primary}
          text={strings.signIn}
          onButtonPressed={signIn({
            email,
            password,
          })}
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
    title: 'Log in',
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
