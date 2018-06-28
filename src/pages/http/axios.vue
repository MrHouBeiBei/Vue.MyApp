<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="promise" @click="clickFn">
    <input type="button" value="tryCatch" @click="clickFn2">
  </div>
</template>

<script>
  import http from '../../utils/http'
  import api from '../../utils/api'
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js axios'
      }
    },
    created() {
      this.init()
    },
    mounted: function () {},
    methods: {
      async init() {
        // console.log(this.fetchData())  //promise对象
        await this.fetchData()
        await this.promiseFn() //有await效果
        await this.promiseFn2() //没await效果
        console.log(2)
      },
      fetchData: async function () {
        let params = {}
        const res = await http.get(api.right, params)
        console.log(res)
        if (res.data.success) {
          // alert('请求成功')
          console.log('请求成功')
        }
      },

      // promise测试
      promiseFn() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('promise、定时器 函数')
            resolve()
          }, 2000)
        })
      },
      promiseFn2() {
        setTimeout(() => {
          console.log('定时器')
        }, 2000)
      },

      /**
       * then方法可以接受两个回调函数作为参数。
         第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。
       */

      clickFn() {
        var a = 10;
        new Promise(function (resolve, reject) {
            //throw new Error('0')   //如果是throw则在catch中捕获
            if (a < 9) {
              resolve('sucess')
            } else {
              reject('error')
            }
          }).then(function (value) {
            console.log('成功', value)
          }, 
          function (error) {
            console.log('失败', error)
          }
          )
          // .catch(function (error) {    //rejected和throw都会调取catch方法
          //   // 处理 getJSON 和 前一个回调函数（.then）运行时发生的错误
          //   console.log('发生错误！', error);
          // })
      },

      /**
       * try catch finally
       */
      clickFn2() {
        try {
          var a = 1;
          throw ('123')
        } catch (error) {
          console.log('错误', error)
        } finally {
          console.log('完成')
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>

