'use strict'

const path = require('path')

const webpack = require('webpack')

const base = require('./webpack.base.js')
const pkg = require(path.resolve(__dirname, '../package.json'))

module.exports = Object.assign({}, base, {
  entry: path.resolve(__dirname, '../src/entries/server-entry.js'),
  output: Object.assign({}, base.output, {
    filename: 'bundle-node.js',
    libraryTarget: 'commonjs2'
  }),
  externals: Object.keys(pkg.dependencies),
  target: 'node',
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      window: false,
      __VUE_ENV__: JSON.stringify('server')
    })
  ])
})
