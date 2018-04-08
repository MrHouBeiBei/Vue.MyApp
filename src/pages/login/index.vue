<template>
  <div>login
      <input type="button" value="登陆" @click="login">
  </div>
</template>

<style lang="less" scoped>

</style>

<script>

import { AUTHOR, SET_TOKEN } from "@/vuex/mutations-type";

export default {
  methods:{
    login(){
      this.$store.commit(SET_TOKEN , true);     //改变token状态
      let redirect = decodeURIComponent(this.$route.query.redirect || '/');  //获取登录成功后要跳转的路由。
      this.$router.push({
        path: redirect
      })
    }
  }
}
</script>


