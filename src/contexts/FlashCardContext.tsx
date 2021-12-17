import React, { createContext, useContext, useState } from 'react'

export enum Severity {
  INFO,
  ERROR,
}

interface Props {
  message?: string
  severity?: Severity
  showErrorMessage(text: string): void
  showInfoMessage(text: string): void
}

const FlashCardContext = createContext({} as Props)

export const FlashCardProvider: React.FunctionComponent = ({ children }) => {
  const [message, setMessage] = useState<string>()
  const [severity, setSeverity] = useState<Severity>()

  const showErrorMessage = (text: string) => showMessage(text, Severity.ERROR)
  const showInfoMessage = (text: string) => showMessage(text, Severity.INFO)

  const showMessage = (text: string, severity: Severity) => {
    setMessage(text)
    setSeverity(severity)

    setTimeout(() => {
      setMessage(undefined)
      setSeverity(undefined)
    }, 3000)
  }

  return (
    <FlashCardContext.Provider
      value={{ message, severity, showErrorMessage, showInfoMessage }}>
      {children}
    </FlashCardContext.Provider>
  )
}

export const useFlashCardContext = () => useContext(FlashCardContext)
