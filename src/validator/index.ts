import { isEmail } from 'class-validator'

const isValidEmail = (email?: string) => isEmail(email)

const isValidPassword = (password?: string) => {
  if (!password) {
    return false
  }

  return new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(
    password,
  )
}

export const validator = {
  email: isValidEmail,
  password: isValidPassword,
}
