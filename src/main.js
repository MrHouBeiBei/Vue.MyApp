// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'

//全局样式
import "./components/style.css"

// Vue.config.productionTip = false
// Vue.config.silent = true

/* eslint-disable no-new */

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
