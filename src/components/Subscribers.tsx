import pluralize from 'pluralize'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Person from 'src/assets/person.svg'
import { Color } from 'src/styles/Color'

interface Props {
  amount: number
}

export const Subscribers: React.FunctionComponent<Props> = ({ amount }) => (
  <View style={styles.container}>
    <Person height={20} width={20} />
    <Text numberOfLines={1} style={styles.text}>
      {pluralize(
        strings.formatString(strings.subscribers, amount) as string,
        amount,
      )}
    </Text>
  </View>
)

const strings = new LocalizedStrings({
  en: {
    subscribers: '({0}) person',
  },
  es: {
    subscribers: '({0}) persona',
  },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
  },
  text: {
    color: Color.Black,
    fontSize: 12,
    fontWeight: '300',
    paddingLeft: 4,
  },
})
