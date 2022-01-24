import { CommonActions, NavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { ParamList } from 'src/routes/Stack'

const navigationRef = React.createRef<NavigationContainerRef<ParamList>>()

let queue: CommonActions.Action[] = []

function navigate(name: string, params?: object) {
  queue.push(CommonActions.navigate(name, params))
  doDispatch()
}

function dispatch(action: CommonActions.Action) {
  queue.push(action)
  doDispatch()
}

function doDispatch() {
  if (!navigationRef.current || !queue.length) {
    return
  }

  const [action, ...rest] = queue
  try {
    navigationRef.current.dispatch(action)
  } catch {
    console.warn('Unable to navigate to', action)
  }
  queue = rest
  doDispatch()
}

export default { dispatch, navigate, navigationRef }
