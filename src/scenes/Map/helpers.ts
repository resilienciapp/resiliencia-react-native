import { DateTime } from 'luxon'
import LocalizedStrings from 'react-native-localization'

export const formatTime = (time: DateTime) =>
  time.set({ millisecond: 0, second: 0 })

export const getDay = (day: number) => {
  switch (day) {
    case 0:
      return strings.monday
    case 1:
      return strings.tuesday
    case 2:
      return strings.wednesday
    case 3:
      return strings.thursday
    case 4:
      return strings.friday
    case 5:
      return strings.saturday
    default:
      return strings.sunday
  }
}

const strings = new LocalizedStrings({
  en: {
    friday: 'Fr',
    monday: 'Mo',
    saturday: 'Sa',
    sunday: 'Su',
    thursday: 'Th',
    tuesday: 'Tu',
    wednesday: 'We',
  },
  es: {
    friday: 'Vi',
    monday: 'Lu',
    saturday: 'Sa',
    sunday: 'Do',
    thursday: 'Ju',
    tuesday: 'Ma',
    wednesday: 'Mi',
  },
})
