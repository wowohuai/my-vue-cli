# my-vue-cli
基于webpack构建自己的vue-cli工具

## vue-cli所提供的功能
  1. ES6代码转ES5
  2. scss/sass/less/stylus  转css
  3. vue文件转js文件
  4. ...










### git问题
  我创建了本地仓库, 然后创建了线上仓库, git pull之后提示 
  `fatal: refusing to merge unrelated histories`,主要原因是本地仓库和线上仓库是两个仓库,需使用下面命令来合并两个独立的仓库
`git pull origin master --allow-unrelated-histories` 