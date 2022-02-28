import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import { isNumber } from 'class-validator'
import { identity } from 'lodash'
import { DateTime } from 'luxon'
import React, { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { LatLng } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import RRule, { Frequency } from 'rrule'
import Close from 'src/assets/close.svg'
import { isAndroid } from 'src/common/device'
import { Button, ButtonMode } from 'src/components/Button'
import { Checkbox } from 'src/components/Checkbox'
import { InputText } from 'src/components/InputText'
import { useAddMarker } from 'src/gql/hooks/useAddMarker'
import { useCategories } from 'src/gql/hooks/useCategories'
import { Color } from 'src/styles/Color'

import { CheckBox } from './CheckBox'
import { formatTime, getDay } from './helpers'
import { useKeyboardHeight } from './useKeyboardHeight'

const { height } = Dimensions.get('screen')

interface Props {
  coordinate: LatLng
  onPressClose(): void
}

export const NewMarkerInput: React.FunctionComponent<Props> = ({
  coordinate,
  onPressClose,
}) => {
  const translateY = useRef(new Animated.Value(height)).current

  const [category, setCategory] = useState(0)
  const [name, setName] = useState('')
  const [days, setDays] = useState<boolean[]>(Array(7).fill(false))
  const [description, setDescription] = useState('')
  const [expiresAt, setExpiresAt] = useState(false)
  const [expiresAtDate, setExpiresAtDate] = useState(DateTime.local())
  const [showExpiresAt, setShowExpiresAt] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  const [showStartTime, setShowStartTime] = useState(false)
  const [showEndTime, setShowEndTime] = useState(false)
  const [startTime, setStartTime] = useState(DateTime.local())
  const [endTime, setEndTime] = useState(DateTime.local().plus({ minutes: 30 }))

  useEffect(() => {
    Animated.timing(translateY, {
      duration: 750,
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }, [translateY])

  const closeModal = () => {
    setTimeout(() => {
      onPressClose()
    }, 750)

    Animated.timing(translateY, {
      duration: 750,
      toValue: height,
      useNativeDriver: true,
    }).start()
  }

  const { categories } = useCategories()
  const { addMarker, loading } = useAddMarker({ onCompleted: closeModal })

  const keyboardHeight = useKeyboardHeight()

  const selectDay = (index: number) => () => {
    const newSelection = [...days]
    newSelection[index] = !newSelection[index]
    setDays(newSelection)
  }

  const selectStartTime = (_: any, selectedDate?: Date) => {
    if (isAndroid) {
      setShowStartTime(false)
    }

    const time = DateTime.fromJSDate(selectedDate || new Date())
    setStartTime(time)
    if (endTime.diff(time, 'minutes').minutes < 30) {
      setEndTime(time.plus({ minutes: 30 }))
    }
  }

  const selectEndTime = (_: any, selectedDate?: Date) => {
    if (isAndroid) {
      setShowEndTime(false)
    }

    const time = DateTime.fromJSDate(selectedDate || new Date())
    setEndTime(time)
    if (time.diff(startTime, 'minutes').minutes < 30) {
      setStartTime(time.minus({ minutes: 30 }))
    }
  }

  const selectEndRepeat = (_: any, selectedDate?: Date) => {
    if (isAndroid) {
      setShowExpiresAt(false)
    }

    const date = DateTime.fromJSDate(selectedDate || new Date())
    setExpiresAtDate(date)
  }

  const toggleStartTime = () => {
    setShowStartTime(!showStartTime)
    setShowEndTime(false)
  }

  const toggleEndTime = () => {
    setShowEndTime(!showEndTime)
    setShowStartTime(false)
  }

  const toggleShowCategory = () => {
    setShowCategory(!showCategory)
  }

  const addNewMarker = () => {
    if (categories.length) {
      const recurrence = new RRule({
        byhour: startTime.toUTC().hour,
        byminute: startTime.toUTC().minute,
        byweekday: days.reduce<number[]>(
          (accumulator, value, index) =>
            value ? accumulator.concat(index) : accumulator,
          [],
        ),
        freq: Frequency.WEEKLY,
      }).toString()

      const duration = formatTime(endTime).diff(
        formatTime(startTime),
        'minutes',
      ).minutes

      addMarker({
        category: categories[category].id,
        description,
        duration,
        expiresAt: expiresAt ? expiresAtDate.toISO() : null,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        name,
        recurrence,
        timeZone: startTime.zoneName,
      })
    }
  }

  const disabled =
    loading ||
    !name ||
    !isNumber(category) ||
    !startTime ||
    !endTime ||
    !days.some(identity)

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.contentContainer}
      style={[
        styles.container,
        { transform: [{ translateY }, { translateY: keyboardHeight }] },
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.safeArea} edges={['bottom']}>
          <Close
            style={styles.close}
            onPress={closeModal}
            fill={Color.Steel}
            height={20}
            width={20}
          />
          <InputText
            autoCapitalize="sentences"
            placeholder={strings.name}
            placeholderTextColor={Color.Steel}
            onChangeText={setName}
            value={name}
          />
          <InputText
            autoCapitalize="sentences"
            multiline={true}
            numberOfLines={5}
            placeholder={strings.description}
            placeholderTextColor={Color.Steel}
            onChangeText={setDescription}
            value={description}
          />
          <View style={styles.categoryContainer}>
            {!isAndroid && !!categories.length && (
              <Text onPress={toggleShowCategory} style={styles.time}>
                {categories[category].name}
              </Text>
            )}
            {(isAndroid || (!isAndroid && showCategory)) && (
              <Picker
                dropdownIconColor={Color.Steel}
                dropdownIconRippleColor={Color.Steel}
                itemStyle={styles.pickerText}
                selectedValue={category}
                onValueChange={setCategory}
                style={styles.picker}>
                {categories.map(({ name }, index) => (
                  <Picker.Item key={index} label={name} value={index} />
                ))}
              </Picker>
            )}
          </View>
          <View style={styles.daysContainer}>
            {days.map((selected, index) => (
              <CheckBox
                key={index}
                onPress={selectDay(index)}
                selected={selected}
                text={getDay(index)}
              />
            ))}
          </View>
          <View style={styles.timeContainer}>
            <Text onPress={toggleStartTime} style={styles.time}>
              {startTime.toLocaleString(DateTime.TIME_SIMPLE)}
            </Text>
            <Text style={styles.time}>{'  -  '}</Text>
            <Text onPress={toggleEndTime} style={styles.time}>
              {endTime.toLocaleString(DateTime.TIME_SIMPLE)}
            </Text>
          </View>
          {showStartTime && (
            <DateTimePicker
              is24Hour={true}
              display={isAndroid ? undefined : 'spinner'}
              mode="time"
              onChange={selectStartTime}
              style={styles.picker}
              value={startTime.toJSDate()}
            />
          )}
          {showEndTime && (
            <DateTimePicker
              is24Hour={true}
              display={isAndroid ? undefined : 'spinner'}
              mode="time"
              onChange={selectEndTime}
              style={styles.picker}
              value={endTime.toJSDate()}
            />
          )}
          <View style={styles.categoryContainer2}>
            <View style={styles.categorySubContainer}>
              <Text style={styles.endRepeat}>
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
                onChange={selectEndRepeat}
                style={styles.picker}
                value={expiresAtDate.toJSDate()}
              />
            )}
          </View>
          <Button
            disabled={disabled}
            mode={ButtonMode.Primary}
            onPress={addNewMarker}
            text={strings.addEvent}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Animated.ScrollView>
  )
}

const strings = new LocalizedStrings({
  en: {
    addEvent: 'Add event',
    category: 'Category',
    description: 'Description',
    duration: 'Duration',
    expiresAt: 'Expires at {0}',
    expiresAtPlaceholder: 'Expires',
    name: 'Name',
  },
  es: {
    addEvent: 'Agregar evento',
    category: 'Categoría',
    description: 'Descripción',
    duration: 'Duración',
    expiresAt: 'Expira el {0}',
    expiresAtPlaceholder: 'Expira',
    name: 'Nombre',
  },
})

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    borderColor: Color.Steel,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 16,
    width: '100%',
  },
  categoryContainer2: {
    alignItems: 'center',
    borderColor: Color.Steel,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 16,
    padding: 12,
    width: '100%',
  },
  categorySubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  close: {
    alignSelf: 'flex-end',
  },
  container: {
    backgroundColor: Color.White95Pct,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
    flex: 1,
    maxHeight: Dimensions.get('screen').height / 1.5,
    position: 'absolute',
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  daysContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  endRepeat: {
    color: Color.Steel,
  },
  picker: {
    color: Color.Black,
    width: '100%',
  },
  pickerText: {
    fontSize: 16,
  },
  safeArea: {
    alignItems: 'center',
    width: '100%',
  },
  time: {
    color: Color.Black,
    fontSize: 16,
  },
  timeContainer: {
    alignItems: 'center',
    borderColor: Color.Steel,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    padding: 14,
    width: '100%',
  },
})
