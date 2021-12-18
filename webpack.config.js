const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }, {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};