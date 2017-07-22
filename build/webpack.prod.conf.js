const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const util = require('./util');
const devConfig = require('./webpack.dev.conf');

module.exports = webpackMerge(devConfig, {
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }), new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
