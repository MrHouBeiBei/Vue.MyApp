import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
console.log('state', state)

const store = new Vuex.Store({
  // 定义状态
  state,
  getters,
  mutations
})

export default store