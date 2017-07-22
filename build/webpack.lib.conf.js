const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const util = require('./util');
const prodConfig = require('./webpack.prod.conf');

module.exports = webpackMerge(prodConfig, {
  entry: './examples/main.js',
  output: {
    path: util.root('lib'),
    filename: 'vue-lte-ui.js',
    library: 'vue-lte-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
});
