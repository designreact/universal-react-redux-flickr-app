'use strict';

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|__tests__)/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.json$/, loader: 'json-loader', exclude: /(node_modules|__tests__)/  },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file", exclude: /(node_modules|__tests__)/  },
            { test: /\.html/, loader: 'file?name=[name].[ext]', exclude: /(node_modules|__tests__)/  },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    output: {
        library: 'Redux',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js']
    }
};