module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src',
        },
        extensions: ['.js', '.jsx', '.es', '.es6', '.ts', '.tsx'],
      },
    ],
  ],
};
