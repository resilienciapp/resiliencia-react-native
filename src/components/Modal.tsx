import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { Color } from 'src/styles/Color'

import { Button, ButtonMode } from './Button'

const dimensions = Dimensions.get('window')

interface Props {
  description?: string
  header?: string
  isModalVisible: boolean
  loading: boolean
  onPressPrimary(): void
  onPressSecondary?(): void
  primaryText: string
  secondaryText: string
  setModalVisibility(value: boolean): void
}

export const Modal: React.FunctionComponent<Props> = ({
  description,
  header,
  isModalVisible,
  loading,
  onPressPrimary,
  onPressSecondary,
  primaryText,
  secondaryText,
  setModalVisibility,
}) => {
  const closeModal = () => setModalVisibility(false)

  return (
    <ReactNativeModal
      deviceHeight={dimensions.height}
      deviceWidth={dimensions.width}
      isVisible={isModalVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      statusBarTranslucent={true}
      style={styles.container}
      useNativeDriver={true}>
      <View style={styles.contentContainer}>
        {header && <Text style={styles.header}>{header}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
        <Button
          disabled={loading}
          mode={ButtonMode.Primary}
          onPress={onPressPrimary}
          text={primaryText}
        />
        <Button
          disabled={loading}
          mode={ButtonMode.PrimaryReversed}
          onPress={onPressSecondary ?? closeModal}
          text={secondaryText}
        />
      </View>
    </ReactNativeModal>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: Color.White,
    borderRadius: 8,
    justifyContent: 'center',
    margin: 16,
    padding: 24,
  },
  description: {
    color: Color.Black,
    fontSize: 14,
    lineHeight: 24,
    paddingBottom: 8,
    textAlign: 'center',
  },
  header: {
    color: Color.Black,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})
