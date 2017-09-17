var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
              {
                /*一个组件  一个文件*/
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}