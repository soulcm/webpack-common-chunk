var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index1.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
       filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons'
        })
    ]
}