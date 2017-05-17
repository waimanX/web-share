const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/main.es6'],
    output: {
        path: path.join(__dirname, './disk'),
        filename: '[name].js'
            // ,
            // publicPath: '/dist/'
            // ,path: __dirname,
            // ,filename: '[name].js'
    },
    // import时可以省略的文件后缀名
    resolve: {
        // 模块目录
        modulesDirectories: ["common", "node_modules"],
        extensions: ['', '.js', '.jsx', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js|.es6|.jsx$/, loader: 'babel', exclude: /node_modules/ },
            // { test: /\.css$/, loader: 'style!css!autoprefixer' },"style-loader", "css-loader"
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "autoprefixer-loader") },
            // { test: /\.less/, loader: 'style!css!autoprefixer!less' },
            { test: /\.(tpl|ejs)$/, loader: 'ejs' },
            { test: /\.(png|jpg|gif)$/, loader: 'file', query: { name: 'images/[name].[ext]' } },
            { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=./fonts/[name].[ext]' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        //创建HtmlWebpackPlugin的实例
        new HtmlWebpackPlugin({
            title: '服务标题',
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
            //要把script插入到标签里
            inject: true
        })
        // 全局引入jquery：
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
    ]
}
