import React from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import Visibility from 'src/assets/visibility.svg'
import VisibilityOff from 'src/assets/visibility_off.svg'
import { Color } from 'src/styles/Color'

interface Props extends TextInputProps {
  error?: boolean
  reference?: React.MutableRefObject<any>
  toggleSecureTextEntry?(): void
}

export const InputText: React.FunctionComponent<Props> = ({
  error = false,
  reference,
  secureTextEntry,
  style,
  textContentType,
  toggleSecureTextEntry,
  ...rest
}) => (
  <View style={styles.container}>
    <TextInput
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
      placeholderTextColor={Color.Steel}
      ref={reference}
      returnKeyType="next"
      secureTextEntry={secureTextEntry}
      selectionColor={Color.Steel}
      style={[styles.input, error && styles.invalidInput, style]}
      textContentType={textContentType}
      {...rest}
    />
    {textContentType === 'password' && (
      <>
        {secureTextEntry ? (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Visibility fill={Color.Steel} height={25} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <VisibilityOff fill={Color.Steel} height={25} />
          </TouchableOpacity>
        )}
      </>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Color.Steel,
    borderRadius: 10,
    borderWidth: 1,
    color: Color.Black,
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
  },
  input: {
    color: Color.Black,
    flex: 1,
    paddingBottom: 12,
    paddingHorizontal: 8,
    paddingTop: 12,
  },
  invalidInput: {
    borderColor: Color.Reddish,
  },
})
