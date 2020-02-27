const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  resolve: {
    alias: {
      '~': resolve('../src'),
      'components': resolve('../src/components'),
      'pages': resolve('../src/pages'),
      'assets': resolve('../src/assets'),
      'styles': resolve('../src/assets/styles'),
      'api': resolve('../src/api'),
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    // 在import时可以不用加扩展名
    extensions: [".js", ".vue", ".json", ".css"]
  },
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
        test: /\.(js|vue)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitError: true,
          // community formatter
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
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
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new CleanWebpackPlugin({
      // 打印信息
      verbose: true
    }),
    //将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
          name: 'vendors.js'
        }
        // },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // }
      }
    }
  }
}
