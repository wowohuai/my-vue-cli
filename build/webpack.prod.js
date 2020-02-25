const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(baseConfig, {

  // 指定打包模式
  mode: 'production',

  module: {
    rules: [{
      test: /\.styl(us)?$/i,
      use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'postcss-loader',
        'stylus-loader'
      ],
    }, ]
  },
  plugins: [
    new CleanWebpackPlugin({
      // 打印信息
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ],
  // source-map
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
})