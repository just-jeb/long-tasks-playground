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
        template: 'src/templates/index.ejs',
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
        template: 'src/templates/index.ejs',
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
    entry: './src/index-sync-yield.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-sync-yield'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/index.ejs',
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
    entry: './src/index-sync-yield-func.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-sync-yield-func'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      splitChunks: {
        chunks: 'all'
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
        template: 'src/templates/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      runtimeChunk: 'single',
    },
  },
  {
    entry: './src/index-async.js',
    output: {
      path: path.resolve(__dirname, 'dist/split-async-preload'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/index-preload.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      runtimeChunk: 'single',
    },
  },
  {
    entry: './src/index-function.js',
    output: {
      path: path.resolve(__dirname, 'dist/function'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/index.ejs',
      })
    ],
    optimization: {
      minimize: false,
      chunkIds: "named",
      runtimeChunk: 'single',
    },
  },
];