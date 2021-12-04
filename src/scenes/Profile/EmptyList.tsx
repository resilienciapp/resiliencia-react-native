import React from 'react'
import { StyleSheet, View } from 'react-native'
import Widgets from 'src/assets/widgets.svg'
import { Color } from 'src/styles/Color'

export const EmptyList = () => (
  <View style={styles.container}>
    <Widgets fill={Color.Steel} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
