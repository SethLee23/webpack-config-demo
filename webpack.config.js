
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',//模式 development/production
    entry: {
        index: path.resolve(__dirname, './src/js/index.js'),
        // demo: path.resolve(__dirname, './src/js/demo.js'),
    },// 页面入口: 多页面使用对象，单页面直接配置
    output: {
        path: path.resolve(__dirname + '/dist'), // 寻找文件夹
        filename: 'js/[name].js'
    },//打包后文件
    module: {
        rules: [
            {
                test: /\.js$/, //test表匹配以什么结尾的文件
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         // cacheDriectory: true,
                //         // presets: ['env'], //转码规则
                //         plugins: ['@babel/plugin-proposal-optional-chaining']
                //     },
                // }
            },
            {
                test: /\.css$/, //test表匹配以什么结尾的文件
                // loader 处理顺序，由下往上
                use: [
                    'style-loader',
                    'css-loader'
                ],//需要多个loader使用use数组
            },
            {
                test: /\.scss$/, //test表匹配以什么结尾的文件
                // loader: 'scss-loader',
                use: [
                    'style-loader',
                    'css-loader',
                    'scss-loader'
                ],//需要多个loader
            },
            {
                test: /\.tpl$/, //test表匹配以什么结尾的文件
                loader: 'ejs-loader',
            },
        ],//
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['index'],//入口文件
            excludeChunks: ['node_modules']
            // chunks: ['demo','index']
        })
    ],// 处理实例化后的插件，需要导入
    devServer: {
        open: true,//启动dev-server时，自动启动浏览器
        host: 'localhost',
        port: '3300'
    }
}