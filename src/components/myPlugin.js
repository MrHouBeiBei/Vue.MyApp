/**
 * 插件
 **/
// var options = {};
        // MyPlugin.install = function (Vue) {}

const MyPlugin = {
    install: function (Vue, options) {
        //   // 1. 添加全局方法或属性    (给Vue对象使用)
          Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log('Vue.myGlobalMethod')
          }
        Vue.myGlobalData = 'myGlobalData test'
        
        //   // 2. 添加全局资源 （可以以添加【自定义指令】、【过滤器】）
        //   Vue.directive('my-directive', {
        //     bind (el, binding, vnode, oldVnode) {
        //       // 逻辑...
        //     }
        //     //...
        //   })
        
        //   // 3. 注入组件
          Vue.mixin({
            created: function () {
              // 逻辑...
            //   console.log('MyPlugin mixin')
            }
            //...
          })
        
          // 4. 添加实例方法 (组件给使用)
          Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('自定义插件方法')
          }
            Vue.prototype.$msg = '自定义插件 Hello World';

        }
}
export default MyPlugin;
