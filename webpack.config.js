var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
};

/*
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
};*/
