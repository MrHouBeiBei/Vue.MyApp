<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item> -->
    <el-breadcrumb-item :to="item.path" v-for="(item, index) of list" :key="index">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>



<script>
  export default {
    props: {
      list: {
        type: Array ,
      }
    }

  }
</script>
