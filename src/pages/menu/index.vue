<template>
  <div>
      导航
      <!-- 嵌套路由 -->
      <!-- 激活时自动添加class -->
     <router-link to="/menu/test">router-link</router-link>
      
      <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>

// class="router-link-exact-active router-link-active"
.router-link-active{
  color: pink
}
</style>

