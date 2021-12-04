import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props extends TextInputProps {
  error?: boolean
  reference?: React.MutableRefObject<any>
}

export const InputText: React.FunctionComponent<Props> = ({
  error = false,
  reference,
  style,
  ...rest
}) => (
  <TextInput
    autoCapitalize="none"
    autoComplete="off"
    autoCorrect={false}
    placeholderTextColor={Color.Steel}
    ref={reference}
    returnKeyType="next"
    selectionColor={Color.Steel}
    style={[styles.input, error && styles.invalidInput, style]}
    {...rest}
  />
)

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  input: {
    borderColor: Color.Steel,
    borderRadius: 10,
    borderWidth: 1,
    color: Color.Black,
    marginVertical: 15,
    padding: 10,
    width: '100%',
  },
  invalidInput: {
    borderColor: Color.Reddish,
  },
})
