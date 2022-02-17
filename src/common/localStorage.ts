import EncryptedStorage from 'react-native-encrypted-storage'

export enum LocalStorageItem {
  JWT = 'jwt',
}

export function getItem(key: LocalStorageItem) {
  return EncryptedStorage.getItem(key)
}

export function setItem(key: LocalStorageItem, value: string) {
  return EncryptedStorage.setItem(key, value)
}

export function removeItem(key: LocalStorageItem) {
  return EncryptedStorage.removeItem(key)
}
