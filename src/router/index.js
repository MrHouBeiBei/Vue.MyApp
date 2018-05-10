import Vue from "vue";
import Router from "vue-router";
import store from '@/vuex/store'

import Hello from "@/components/Hello";
import test from "@/pages/test";

Vue.use(Router);

// export default new Router({
const router = new Router({
  // mode: 'history',/

  //滚动行为
  scrollBehavior (to, from, savedPosition) {
    // console.log(to)
    if(to.meta.scroll) {
      // return { x: 0, y: 2 }
    }
    //浏览器 前进/后退
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
  },
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/test",
      name: "test",
      component: test,
      meta: {
        requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
        test: true
      }
    },    
    {
      path: "/axios",
      name: "axios测试",
      component: () =>
        import(/* webpackChunkName: "group-axios" */ "@/pages/axios.vue"),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: "/login",
      name: "登陆",
      component: () =>
        import(/* webpackChunkName: "group-login" */ "@/pages/login/index.vue"),
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    //嵌套路由测试
    {
      path: "/menu",
      name: "菜单",
      component: () =>
        import(/* webpackChunkName: "group-menu" */ "@/pages/menu/index.vue"),
      children: [
        {
          path: "test",
          name: "嵌套路由测试",
          component: () =>
            import(/* webpackChunkName: "group-menu" */ "@/pages/menu/test/test.vue"),
        },
        {
          path: "test/b",
          // name: "嵌套路由测试2",
          //component:   // () =>
          // import(/* webpackChunkName: "group-menu" */ "@/pages/menu//test/test2.vue"),
          components: {
            default: () =>
            import(/* webpackChunkName: "group-menu" */ "@/pages/menu/test/test2.vue"),
            a: test
          },
          meta: {
            scroll: true
          }
        }
      ]
    }
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  // console.log(from);
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限

    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
//   let isLogin = global.isLogin;  // 是否登录
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {
//     if (!isLogin) {
//       console.log('what fuck');
//       router.push({ name: 'login' })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home
//   if (to.name === 'login') {
//     if (isLogin) {
//       router.push({ name: 'home' });
//     }
//   }
// next();
// });

export default router;
