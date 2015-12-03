'use strict';

var path = require('path')
var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


var config = Object.create(baseConfig)

config.devtool ='inline-source-map'

config.entry = [
    './src/server/server.js'
]

config.context = __dirname
config.target = 'node'
config.externals = nodeModules

config.output= {
    path: path.join(__dirname, 'server'),
    filename: 'server.js',
    publicPath: '/static/'
}

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin()
]

config.module = {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules|__tests__/,
            include: __dirname,
            query: {
                presets: ['react', 'es2015']
            }
        },
        { test: /\.json$/, loader: 'json-loader', exclude: /(node_modules|__tests__)/  },
        { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file", exclude: /(node_modules|__tests__)/  },
        { test: /\.html/, loader: 'file?name=[name].[ext]', exclude: /(node_modules|__tests__)/  },
        { test: /\.scss$/, loader: "css!sass" }
    ]
}

module.exports = config