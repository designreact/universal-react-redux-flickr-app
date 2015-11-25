'use strict';

var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')

var config = Object.create(baseConfig)
config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
]

config.entry = './src/client/index'
config.output = {
    path: './build',
    filename: 'bundle.js'
}

module.exports = config