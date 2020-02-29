const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'index.js': [
            './js/helpers.js',
            './js/store.js',
            './js/model.js',
            './js/template.js',
            './js/view.js',
            './js/controller.js',
            './js/app.js'
        ]

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'index.css',
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/css/',
                        minimize: true
                    }
                },
                    'css-loader',
                    'postcss-loader',],
            },
        ],
    },
}