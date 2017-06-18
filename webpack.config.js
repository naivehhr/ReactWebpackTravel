const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './index.js');
module.exports = {
  // devtool: 'eval-source-map',// 这是个啥https://segmentfault.com/a/1190000004280859
  devServer: {  //这里配置webpack-dev-server
    publicPath: '/dist/'
    //这里还可以加入其它你需要的参数
  },
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
            }
          }
        ],
      }
    ]
  }
}