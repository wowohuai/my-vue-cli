const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {

  // 指定打包模式
  mode: 'production',

  module: {
    rules: [{
      test: /\.(styl(us)|css)?$/i,
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

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  // source-map
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
})
