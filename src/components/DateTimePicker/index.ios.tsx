import _DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { View } from 'react-native'

interface Props {
  value: Date
}

export const DateTimePicker: React.FunctionComponent<Props> = ({
  setValue,
  value,
}) => {
  const onChange = (event, selectedDate) => {
    setValue(currentDate)
  }

  return (
    <View style={{ alignSelf: 'center', alignItems: 'center', width: '100%' }}>
      <_DateTimePicker
        display="default"
        is24Hour={true}
        mode="datetime"
        onChange={onChange}
        testID="dateTimePicker"
        value={value}
        style={{ width: '100%' }}
      />
    </View>
  )
}
