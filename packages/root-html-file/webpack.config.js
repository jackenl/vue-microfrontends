const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 5000,
    hot: true,
    quiet: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
  ],
}