const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  // 指定打包模式
  mode: 'development',
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    // 配置打包文件的输出路径
    path: path.resolve(__dirname, '../dist'),
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
        test: /\.(styl|css)$/i,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-vue-cli',
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin({
      verbose: true
    })
  ]
}