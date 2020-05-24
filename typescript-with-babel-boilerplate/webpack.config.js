const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  module: {

    /* The rules basically match an extension to a loader */

    rules: [
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
      // Enable gzip compression
      compress: true,
      port: 3000,
  }
};