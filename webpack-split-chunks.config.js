const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Your amazing app!',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   maxSize: 10000
    // },
    runtimeChunk: 'single',
  },
};