/*
 var path = require('path');
 var ExtractTextPlugin = require("extract-text-webpack-plugin");

 //require("css!./assets/styles/css/contact.css");

 module.exports = {
 entry: path.resolve(__dirname, 'app/main.js'),
 output: {
 path: __dirname,
 filename: 'bundle.js'
 },
 module: {
 loaders: [
 { test: /\.css$/, loader: "style!css" }
 ]
 }
 };
 */
var path = require('path');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    modulesDirectories: [
        'node_modules'
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'baggage?[file].html&[file].css'
            }
        ],
        loaders: [{
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname + '/!html'
            }]
    }
};
