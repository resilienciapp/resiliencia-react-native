import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import { Color } from 'src/styles/Color'

export enum ButtonMode {
  Primary = 'Primary',
  PrimaryReversed = 'PrimaryReversed',
  Secondary = 'Secondary',
}

interface ButtonProps {
  disabled?: boolean
  mode: ButtonMode
  onPress?(): void
  reference?: React.LegacyRef<TouchableOpacity>
  style?: StyleProp<ViewStyle>
  text: string
  textStyle?: StyleProp<ViewStyle>
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  disabled = false,
  mode,
  onPress,
  reference,
  style,
  text,
  textStyle,
}) => (
  <TouchableOpacity
    activeOpacity={0.75}
    disabled={disabled}
    onPress={onPress}
    ref={reference}
    style={[commonStyles.container, styles(disabled)[mode].container, style]}>
    <Text style={[commonStyles.text, styles(disabled)[mode].text, textStyle]}>
      {text}
    </Text>
  </TouchableOpacity>
)

const commonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    padding: 10,
    width: '75%',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

const styles = (disabled: boolean) => ({
  [ButtonMode.Primary]: {
    container: {
      backgroundColor: disabled ? Color.Steel : Color.Blue,
      borderColor: disabled ? Color.Steel : Color.Blue,
      borderRadius: 16,
      borderWidth: 1,
      elevation: 8,
      shadowColor: Color.Steel,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.75,
      shadowRadius: 5,
    },
    text: {
      color: Color.White,
    },
  },
  [ButtonMode.PrimaryReversed]: {
    container: {
      backgroundColor: Color.White,
      borderColor: disabled ? Color.Steel : Color.Blue,
      borderRadius: 16,
      borderWidth: 1,
      elevation: 8,
      shadowColor: Color.Steel,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.75,
      shadowRadius: 5,
    },
    text: {
      color: disabled ? Color.Steel : Color.Blue,
    },
  },
  [ButtonMode.Secondary]: {
    container: {
      backgroundColor: Color.Transparent,
      borderColor: Color.Transparent,
      borderWidth: 1,
    },
    text: {
      color: Color.Steel,
    },
  },
})
