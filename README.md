# my-vue-cli
基于webpack构建自己的vue-cli工具

## vue-cli所提供的功能
  1. ES6代码转ES5(IE9+)
  2. scss/sass/less/stylus  转css
  3. vue文件转js文件
  4. ...



#### 配置过程中遇到的问题

1. git问题
  我创建了本地仓库, 然后创建了线上仓库, git pull之后提示
  `fatal: refusing to merge unrelated histories`,主要原因是本地仓库和线上仓库是两个仓库,需使用下面命令来合并两个独立的仓库
`git pull origin master --allow-unrelated-histories`

2. bable
bable-loader  使用 Babel 和 webpack 转译 JavaScript 文件
  - 安装 @babel/core @babel/preset-env
  - core-js@2 @babel/runtime-corejs2 -S  按需引入  


3. eslint

  - 安装 eslint eslint-loader babel-eslint
  - npx eslint --init  初始化
  - 安装 eslint-plugin-vue eslint-plugin-html

  使用airbnb规范
  - 安装eslint-config-airbnb-base eslint-plugin-import eslint-import-resolver-alias(解决别名问题)


