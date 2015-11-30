'use strict';

var _ = require('lodash')
var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')

var config = Object.create(baseConfig)

config.module.loaders = [
    {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        exclude: /(node_modules|__tests__)/,
    },
    { test: /\.json$/, loader: 'json-loader', exclude: /(node_modules|__tests__)/  },
    { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file", exclude: /(node_modules|__tests__)/  },
    { test: /\.html/, loader: 'file?name=[name].[ext]', exclude: /(node_modules|__tests__)/  },
    { test: /\.scss$/, loader: "style!css!sass" }
]

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
]

config.entry = [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/client/index'
    ]

config.output = _.extend({
    path: './build',
    filename: 'bundle.js'
}, config.output);

module.exports = config