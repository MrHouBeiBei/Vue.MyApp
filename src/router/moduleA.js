export default [
    {
    path: "globalProperty",
    name: "全局可枚举属性获取",
    component: () =>
      import ( /* webpackChunkName: "group-vue" */ "@/pages/vue/globalProperty.vue"),
  }, {
    path: "route",
    name: "route监听",
    component: () =>
      import ( /* webpackChunkName: "group-vue" */ "@/pages/vue/route.vue"),
  },{
    path: "paste",
    name: "黏贴板监听",
    component: () =>
      import ( /* webpackChunkName: "group-vue" */ "@/pages/js/paste.vue"),
  },{
    path: "canvas",
    name: "黏贴板监听",
    component: () =>
      import ( /* webpackChunkName: "group-vue" */ "@/pages/js/canvas.vue"),
  }
]

// 侧边栏导航和路由可以用同一个数据
