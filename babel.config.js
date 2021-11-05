module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['.'],
      },
    ],
  ],
  presets: [
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
}
