<template>
  <div class="box">
      导航
      <!-- 嵌套路由 -->
      <!-- 激活时自动添加class -->
     <router-link to="/menu/test">router-link1</router-link>
     <router-link to="/menu/test/b">router-link2</router-link>
     <!-- <router-link to="test" append>router-link3</router-link> -->
      
      <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

.box{
  height: 2000px
}

// class="router-link-exact-active router-link-active"
// .router-link-active{
.router-link-exact-active{
  color: pink
}
</style>

