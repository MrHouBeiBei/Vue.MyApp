export default [{
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
},]
