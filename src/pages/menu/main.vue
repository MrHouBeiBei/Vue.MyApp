<template>
  <div class="nav-box">
    <el-container class="all-container">
      <el-header style="background-color: rgb(55,61,65)">
        header
      </el-header>
      <el-container class="main-container">
        <!-- <el-aside class="aside" style="background-color: rgb(39,43,46)"> -->
        <el-aside class="aside">
            <aside-menu></aside-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer style="background-color: rgb(55,61,65)">footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import asideMenu from './aside.vue'
  export default {
    components: {
        asideMenu
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>


<style lang="less" scoped>
  // .nav-box{
  //     height: 100%;
  // }
  .all-container {
    height: calc(100vh);
    // color: #FFF; // height: 100%;
  }

  .main-container {
    height: calc(100vh-60px); // height:100%-60px;
  }

  //   .aside {
  //   }
</style>
