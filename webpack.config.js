const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = [
  {
    entry: './src/index-sync.js',
    output: {
      path: path.resolve(__dirname, 'dist/single-sync'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      runtimeChunk: 'single',
    },
  },
  {
    entry: './src/index-sync.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-sync'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
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
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      runtimeChunk: 'single',
    },
  },
  {
    entry: './src/index-sync-yield.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-sync-yield'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      splitChunks: {
        chunks: 'all',
        maxSize: 50000
      },
      runtimeChunk: 'single',
    },
  }];