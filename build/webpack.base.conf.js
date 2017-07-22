const path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader', options: { loaders: {} } },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  }
};
