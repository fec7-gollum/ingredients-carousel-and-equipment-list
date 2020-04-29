module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    path: __dirname + '/client/dist'
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/react', '@babel/env']
          }
        }
      }
    ]
  }
};