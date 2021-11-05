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
  Secondary = 'Secondary',
}

interface ButtonProps {
  mode: ButtonMode
  onButtonPressed(): void
  style?: StyleProp<ViewStyle>
  text?: string
  textStyle?: StyleProp<ViewStyle>
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  mode,
  onButtonPressed,
  style,
  text,
  textStyle,
}) => (
  <TouchableOpacity
    activeOpacity={0.75}
    onPress={onButtonPressed}
    style={[commonStyles.container, styles[mode].container, style]}>
    <Text style={[commonStyles.text, styles[mode].text, textStyle]}>
      {text}
    </Text>
  </TouchableOpacity>
)

const commonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 200,
  },
  text: {
    fontWeight: 'bold',
  },
})

const styles = {
  [ButtonMode.Primary]: StyleSheet.create({
    container: {
      backgroundColor: Color.Blue,
      borderRadius: 15,
      shadowColor: 'gray',
      shadowOffset: {
        height: 10,
        width: 0,
      },
      shadowOpacity: 0.75,
      shadowRadius: 5,
    },
    text: {
      color: Color.White,
    },
  }),
  [ButtonMode.Secondary]: StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
    },
    text: {
      color: Color.Gray,
    },
  }),
}
