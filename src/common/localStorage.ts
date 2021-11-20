import { MMKV } from 'react-native-mmkv'

export const localStorage = new MMKV()

export enum LocalStorageItem {
  JWT = 'jwt',
}
