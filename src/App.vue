<template>
  <div id="app">
    <h2>App.vue</h2>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

$color-pink: pink;

// sass嵌套 & 是当前外层元素
h2{
  #app>& {
    color: blue;
  }
}

// </style>

// <style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
