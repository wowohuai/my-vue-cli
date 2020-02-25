const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '~': resolve('../src')
    }
  },
  // 指定打包模式
  mode: 'development',
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    // 配置打包文件的输出路径
    path: resolve('../dist'),
    // 生成的js文件名
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用路径
    publicPath: './'
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.styl$/i,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            name: 'fonts/[name].[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-vue-cli',
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin({
      // 打印信息
      verbose: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // source-map
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    // compress: true,
    port: 9000,
    publicPath: '/',
    open: true,
    // 开启热更新
    hot: true,
    // 不自动刷新浏览器
    hotOnly: true
  }
}