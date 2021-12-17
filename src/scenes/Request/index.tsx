import DateTimePicker from '@react-native-community/datetimepicker'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { isAndroid } from 'src/common/device'
import { Button, ButtonMode } from 'src/components/Button'
import { Checkbox } from 'src/components/Checkbox'
import { InputText } from 'src/components/InputText'
import { useAddRequest } from 'src/gql/hooks/useAddRequest'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

export const Request: RouteComponent<Route.Request> = ({ route }) => {
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

  return (
    <View style={styles.container}>
      <InputText
        multiline={true}
        numberOfLines={2}
        placeholder={strings.description}
        placeholderTextColor={Color.Steel}
        onChangeText={setDescription}
        value={description}
      />
      <View style={styles.sectionContainer}>
        <View style={styles.subSectionContainer}>
          <Text style={styles.sectionText}>{strings.expiresAt}</Text>
          <Checkbox
            checked={expiresAt}
            onPress={() => {
              setExpiresAt(!expiresAt)
              setShowExpiresAt(!expiresAt)
            }}
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
            onPress={() => setNotifiable(!notifiable)}
          />
        </View>
      </View>
      <Button
        disabled={loading}
        mode={ButtonMode.Primary}
        onPress={addRequest({
          description,
          expiresAt,
          marker: route.params.id,
          notifiable,
        })}
        text={strings.submit}
      />
    </View>
  )
}

const strings = new LocalizedStrings({
  'en-US': {
    description: 'Description',
    expiresAt: 'Expires at',
    notifiable: 'Notify subscribers',
    submit: 'Submit',
  },
  'es-UY': {
    description: 'Descripción',
    expiresAt: 'Expira',
    notifiable: 'Notificar subscriptos',
    submit: 'Enviar',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.White,
    flex: 1,
    padding: 16,
  },
  picker: {},
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
