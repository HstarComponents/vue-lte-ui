const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const util = require('./util');
const baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  devtool: '#source-map',
  entry: './src/index.js',
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
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        LIB_VERSION: `'${require('../package.json').version}'`
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
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
