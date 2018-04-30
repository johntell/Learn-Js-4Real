var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../');
require("babel-polyfill");

module.exports = {
    entry: [
        "babel-polyfill",
        path.join(parentDir, 'index.js')
    ],
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    },{
                        loader: "css-loader" // translates CSS into CommonJS
                    },{
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    }
}