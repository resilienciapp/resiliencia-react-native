import React from 'react'

export const focusNextRef = (ref: React.MutableRefObject<any>) => () =>
  ref.current.focus()
