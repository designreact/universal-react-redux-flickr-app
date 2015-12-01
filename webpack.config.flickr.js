'use strict';

var fs = require('fs');
var _ = require('lodash');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
];

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    }
);

config.entry = './src/server/flickr';
config.output = _.extend({
    path: './server',
    filename: 'flickr.js'
}, config.output);

config.externals = nodeModules;

module.exports = config;