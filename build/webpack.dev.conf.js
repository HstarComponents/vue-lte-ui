const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const util = require('./util');
const baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  entry: './examples/main.js',
  output: {
    path: util.root('dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
});
