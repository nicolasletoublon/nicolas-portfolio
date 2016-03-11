var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.min.js'
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
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
