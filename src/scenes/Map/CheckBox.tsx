import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Color } from 'src/styles/Color'

interface Props {
  disabled?: boolean
  onPress?(): void
  selected?: boolean
  text?: string
}

export const CheckBox: React.FunctionComponent<Props> = ({
  disabled = false,
  onPress,
  selected = false,
  text,
}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.container, selected && styles.selected]}>
    <Text style={[styles.text, selected && styles.textSelected]}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Color.Steel,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 4,
    paddingVertical: 12,
  },
  selected: {
    borderColor: Color.Blue,
    borderWidth: 2,
    marginHorizontal: 3,
    paddingVertical: 11,
  },
  text: {
    color: Color.Steel,
    fontSize: 12,
  },
  textSelected: {
    color: Color.Black,
  },
})
