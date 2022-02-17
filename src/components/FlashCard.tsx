import { isUndefined } from 'lodash'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Severity, useFlashCardContext } from 'src/contexts/FlashCardContext'
import { Color } from 'src/styles/Color'

const getSeverityColor = (severity: Severity) => {
  switch (severity) {
    case Severity.ERROR:
      return Color.Reddish
    case Severity.INFO:
      return Color.Blue
    default:
      return Color.Steel
  }
}

export const FlashCard = () => {
  const { message, severity } = useFlashCardContext()

  if (!message || isUndefined(severity)) {
    return null
  }

  const color = getSeverityColor(severity)

  return (
    <SafeAreaView style={[styles.container, { borderColor: color }]}>
      <Text style={{ color }}>•</Text>
      <Text numberOfLines={10} style={styles.text}>
        {message}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    borderBottomWidth: 3,
    flexDirection: 'row',
    left: 0,
    paddingHorizontal: 16,
    paddingVertical: 24,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  text: {
    color: Color.Steel,
    fontSize: 16,
    marginLeft: 8,
  },
})
