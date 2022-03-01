import compareVersions from 'compare-versions'
import DeviceInfo from 'react-native-device-info'

export const shouldUpdateApp = (
  minimumVersion: string,
  currentVersion: string = DeviceInfo.getVersion(),
) => {
  const result = compareVersions(currentVersion, minimumVersion)

  return result < 0
}
