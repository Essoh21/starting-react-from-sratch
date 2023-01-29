const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        clearn: true,
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
    },

    //loaders 

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(svg|png|ico|jpg|jpeg|webp|gif|)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(js|jsx)$/i,
                use: 'babel-loader',
            },
        ]
    },
    //plugins
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/html/index.html' })
    ]

}