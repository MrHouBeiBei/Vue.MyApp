import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/pages/test'
import axios from '@/pages/axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/axios',
      name: 'axios',
      component: axios
    }
  ]
})
