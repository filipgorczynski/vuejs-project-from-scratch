path = require('path');

module.exports = {
    entry: path.resolve(__dirname) + '/src/main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname) + 'dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};