import DateTimePicker from '@react-native-community/datetimepicker'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { SafeAreaView } from 'react-native-safe-area-context'
import { isAndroid } from 'src/common/device'
import { Button, ButtonMode } from 'src/components/Button'
import { Checkbox } from 'src/components/Checkbox'
import { InputText } from 'src/components/InputText'
import { useAddRequest } from 'src/gql/hooks/useAddRequest'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

export const Request: RouteComponent<Route.Request> = ({
  route: {
    params: { markerId },
  },
}) => {
  const [description, setDescription] = useState('')
  const [expiresAt, setExpiresAt] = useState(false)
  const [expiresAtDate, setExpiresAtDate] = useState(DateTime.local())
  const [showExpiresAt, setShowExpiresAt] = useState(false)
  const [notifiable, setNotifiable] = useState(false)

  const { addRequest, loading } = useAddRequest()

  const selectExpiresAtDate = (_: any, selectedDate?: Date) => {
    if (isAndroid) {
      setShowExpiresAt(false)
    }

    const date = DateTime.fromJSDate(selectedDate || new Date())
    setExpiresAtDate(date)
  }

  const onPressExpiresAt = () => {
    setExpiresAt(!expiresAt)
    setShowExpiresAt(!expiresAt)
  }

  const onPressNotifiable = () => {
    setNotifiable(!notifiable)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <InputText
          multiline={true}
          numberOfLines={2}
          onChangeText={setDescription}
          placeholder={strings.description}
          placeholderTextColor={Color.Steel}
          style={styles.input}
          value={description}
        />
        <View style={styles.sectionContainer}>
          <View style={styles.subSectionContainer}>
            <Text style={styles.sectionText}>
              {expiresAt
                ? strings.formatString(
                    strings.expiresAt,
                    expiresAtDate.toLocaleString(DateTime.DATE_FULL),
                  )
                : strings.expiresAtPlaceholder}
            </Text>
            <Checkbox
              checked={expiresAt}
              checkedBorderColor={Color.Blue}
              onPress={onPressExpiresAt}
            />
          </View>
          {showExpiresAt && (
            <DateTimePicker
              disabled={!expiresAt}
              display={isAndroid ? undefined : 'spinner'}
              minimumDate={new Date()}
              mode="date"
              onChange={selectExpiresAtDate}
              style={styles.picker}
              value={expiresAtDate.toJSDate()}
            />
          )}
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.subSectionContainer}>
            <Text style={styles.sectionText}>{strings.notifiable}</Text>
            <Checkbox
              checked={notifiable}
              checkedBorderColor={Color.Blue}
              onPress={onPressNotifiable}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={loading || !description}
            mode={ButtonMode.Primary}
            onPress={addRequest({
              description,
              expiresAt: expiresAt ? expiresAtDate.toISO() : null,
              marker: markerId,
              notifiable,
            })}
            text={strings.submit}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    description: 'Description',
    expiresAt: 'Expires at {0}',
    expiresAtPlaceholder: 'Expires',
    notifiable: 'Notify subscribed persons',
    submit: 'Submit',
  },
  'es-UY': {
    description: 'Descripción',
    expiresAt: 'Expira el {0}',
    expiresAtPlaceholder: 'Expira',
    notifiable: 'Notificar personas subscriptas',
    submit: 'Enviar',
  },
})

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: Color.White,
    flex: 1,
    padding: 16,
  },
  input: {
    marginTop: 0,
    paddingBottom: 19,
    paddingTop: 19,
  },
  picker: {
    width: '100%',
  },
  sectionContainer: {
    alignItems: 'center',
    borderColor: Color.Steel,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 16,
    padding: 12,
    width: '100%',
  },
  sectionText: {
    color: Color.Steel,
  },
  subSectionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})
