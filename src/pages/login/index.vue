<template>
  <div class="login-box">
    <el-row>
      <el-col :span="10" :offset="7">
        <el-card>
          <el-row>
            <el-col :span="22" :offset="1">
              <el-form :model="formData" label-width="50px">
                <el-form-item label="账号">
                  <el-input v-model="formData.userName" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="formData.password" type="password" placeholder="输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login">登陆</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
  .login-box {
    box-sizing: border-box;
    height: 100%;
    padding-top: 10%;
  }
</style>

<script>
   import testService from '../../share/test.service'
  import {
    AUTHOR,
    SET_TOKEN
  } from "@/vuex/mutations-type";

  export default {
    data() {
      return {
        formData: {
          userName: 'Herbie',
          password: '',
        }
      }
    },
    created() {
      let log = console.log
      log(process.env)
      console.log(testService.envTest())
    },
    mounted() {
      document.onkeyup = (e) => {
        //  console.log(e)
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;
        switch (keyCode) {
          case 13:
            this.login()
            break;
          default:
            break;
        }
      }
    },
    methods: {
      login() {
        var formData = this.formData
        if (formData.password != '666666') {
          return this.$_Message({
            message: '密码错误！',
            type: 'error'
          });
        }
        this.$_Message({
          message: '登陆成功！',
          type: 'success'
        });
        this.$store.commit(SET_TOKEN, true); //改变token状态
        let redirect = decodeURIComponent(this.$route.query.redirect || '/nav'); //获取登录成功后要跳转的路由。
        this.$router.push({
          path: redirect
        })
      }
    }
  }
</script>
