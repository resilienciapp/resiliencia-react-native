module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['.'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: [
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
}
