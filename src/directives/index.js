export default {
    // 钩子函数的参数 (即 el、binding、vnode 和 oldVnode)。
  focus: {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el, binding, vnode, oldVnode) {
        // console.log('自定义指令节点', el) 
        // console.log(binding) 
        // console.log(vnode) 
        // console.log(oldVnode) 
        el.style.marginLeft = "10px"
      // 聚焦元素
      el.focus()
    }
  }
}
