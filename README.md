# y

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 配置sass
电脑需装 Ruby
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass

#Velocity
安装  npm install velocity-animate --save
全局引入 或 页面引入： import  Velocity from 'velocity-animate'
文档：http://www.mrfront.com/docs/velocity.js/index.html

#animate.css


#comiit规范
Commitizen工具
npm install -g commitizen
commitizen init cz-conventional-changelog --save --save-exact
package配置：
"script": {
    "commit": "git cz"
}
git commit命令，改为使用git cz
