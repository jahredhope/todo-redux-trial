module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: './app.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {'presets': ['es2015-native-modules', 'react']}
    },
    { test: /\.(jpg|png)$/, loader: 'base64-image' }]
  },
  resolve: {
    modulesDirectories: ['./src', 'node_modules']
  },
  devServer: {
    contentBase: './',
    headers: { 'Access-Control-Allow-Origin': '*'}
  }
};
