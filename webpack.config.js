const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },

    devServer: {
        contentBase: './dist',
        port: 8000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            file: 'index.html',
            template: './src/index.html'
        })
    ]
}