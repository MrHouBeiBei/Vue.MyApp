// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import filters from "./filters/index";
import directives from "./directives/index";

//全局
import "./components/style.css"
import "./components/animate.css"
import "./components/app.js"

// 插件
import MyPlugin from "./components/myPlugin"
import toastPlugin from "./components/toastPlugin"
import "./components/toastPlugin.less"
import  Velocity from 'velocity-animate'  //动画
// import 'velocity-animate/velocity.ui.js'

import vueUtil from "./components/vueUtil"  


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(MyPlugin)
Vue.use(toastPlugin)
// Vue.use(Velocity)

Vue.use(vueUtil)

// 全局函数
Vue.prototype.method = function() {
  console.log('全局函数 vue.prototype method')
}
Vue.prototype.method2 = function() {
  console.log('全局函数 vue.prototype method2')
}

console.log('插件自定义全局属性', Vue.myGlobalData)

// Vue.config.productionTip = false
// Vue.config.silent = true

/* eslint-disable no-new */

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Object.keys(directives).forEach( key => Vue.directive(key, directives[key]))

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
