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
        preLoaders: [{
                test: /\.js$/,
                loader: 'baggage?[file].html&[file].css'
            }
        ],
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url?limit=25000'
        },
        {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + __dirname + '/!html'
        }]
    }
};
