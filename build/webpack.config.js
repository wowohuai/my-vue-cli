const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '~': resolve('../src'),
      'components': resolve('../src/components')
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
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
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
    //将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin()
  ]
}