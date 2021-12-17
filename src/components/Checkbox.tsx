import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import Done from 'src/assets/done.svg'
import { Color } from 'src/styles/Color'

interface Props {
  checked: boolean
  onPress?(): void
  style?: StyleProp<ViewStyle>
}

export const Checkbox: React.FunctionComponent<Props> = ({
  checked,
  onPress,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, checked && styles.selected, style]}>
    {checked && <Done height="100%" width="100%" />}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    borderColor: Color.Steel,
    borderRadius: 8,
    borderWidth: 1,
    height: 30,
    width: 30,
  },
  selected: {
    borderColor: Color.Blue,
    borderWidth: 2,
  },
})
