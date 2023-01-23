const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/single-sync'),
    },
    plugins: [
      new HtmlWebpackPlugin()
    ],
    optimization: {
      runtimeChunk: 'single',
    },
  },
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-sync'),
    },
    plugins: [
      new HtmlWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 50000
      },
      runtimeChunk: 'single',
    },
  },
  {
    entry: './src/index-async.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-async'),
    },
    plugins: [
      new HtmlWebpackPlugin()
    ],
    optimization: {
      runtimeChunk: 'single',
    },
  }];