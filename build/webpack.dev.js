const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(baseConfig, {
  // 指定打包模式
  mode: 'development',
  module: {
    rules: [{
      test: /\.styl(us)?$/i,
      use: ['vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'postcss-loader',
        'stylus-loader'
      ],
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  // source-map
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    publicPath: '/',
    // open: true,
    // 开启热更新
    hot: true,
    // 不自动刷新浏览器
    hotOnly: true,
    overlay: true,
    quiet: true
  }
})
