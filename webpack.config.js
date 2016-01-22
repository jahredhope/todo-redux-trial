module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist/",
    filename: "./app.js"
  },
  headers: { "Access-Control-Allow-Origin": "*" },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {presets: ["es2015", "react"]}
      }
    ]
  },
  devServer: {
    contentBase: "./",
    headers: { "Access-Control-Allow-Origin": "*"}
  }
};
