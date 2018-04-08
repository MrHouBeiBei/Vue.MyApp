// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import filters from "./filters/index";


//全局样式
import "./components/style.css"
import "./components/app.js"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 全局函数
Vue.prototype.method = function() {
  console.log('method')
}

// Vue.config.productionTip = false
// Vue.config.silent = true

/* eslint-disable no-new */

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
