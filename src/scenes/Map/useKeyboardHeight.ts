import { useEffect, useRef } from 'react'
import { Animated, Easing, Keyboard, KeyboardEvent } from 'react-native'

export const useKeyboardHeight = () => {
  const keyboardHeight = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      (event: KeyboardEvent) => {
        Animated.timing(keyboardHeight, {
          duration: event.duration,
          easing: Easing.bezier(0, 0, 0.7, 1),
          toValue: -event.endCoordinates.height,
          useNativeDriver: true,
        }).start()
      },
    )
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      (event: KeyboardEvent) => {
        Animated.timing(keyboardHeight, {
          duration: event.duration,
          easing: Easing.bezier(0, 0, 0.7, 1),
          toValue: 0,
          useNativeDriver: true,
        }).start()
      },
    )

    return () => {
      keyboardWillShowListener.remove()
      keyboardWillHideListener.remove()
    }
  }, [keyboardHeight])

  return keyboardHeight
}
