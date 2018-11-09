<template>
  <div class="test-box">
    <h2>{{msg}}</h2>
    <p class="global">全局样式测试</p>
    <p class="lessTest">sass配置测试</p>
    <watch-test :oneString="boyA" @girlToBoy="receiveLove"></watch-test>

    <button @click="changboyA">改变父组件变量</button>
    <button @click="changstore">getters</button>
    <button @click="mutationsStore">mutations</button>
    <button @click="action">action</button>
    <button @click="toast">toast</button>

    <mt-button type="primary">default</mt-button>

    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <div>时间过滤器测试：
      <p>{{date | dateFrm}}</p>
      <p>{{date | dateFrm('YYYY-MM-DD')}}</p>
    </div>

    <router-link to="/login">router-link1</router-link>
    <!-- 显示为span标签 -->
    <router-link to="/login" tag="span">router-link2</router-link>

    <h4>自定义指令</h4>
    <input type="text" placeholder="自定义指令自动聚焦" v-focus v-test="'test'">
    <h4>自定义插件toast</h4>
    <input type="button" value="toast" @click="toastClick">

    <h4>子组件响应式数据测试</h4>
    <input type="button" value="改变数据" @click="addData">
    <div v-if="dataTestShow">
      <data-test :testData="cdata"></data-test>
    </div>
    <h4>vuex响应式数据测试</h4>
    <input type="button" value="改变列表" @click="changePersons">
    <input type="button" value="重新commit列表2" @click="changePersons2">
    <vuex-test></vuex-test>

    <h4>插槽组件</h4>
    <slot-test>
      <!-- 123 -->
      <template slot="one">
        插槽一
      </template>
    </slot-test>

    <h4>web响应式适配测试</h4>
    <span class="rem-test">rem</span>

    <h4>vh、vw</h4>
    <div>
      <div class="vw-a">vw</div>
      <div class="vw-b">vw</div>
    </div>
    
    <h4>ES6解构</h4>
    <input type="button" value="解构测试函数" @click="solveFn">

    <h4>在组件中两种获取Vue实例方法</h4>
    <input type="button" value="获取" @click="getVue">

    <h4>数组和类数组对象</h4>
    <input type="button" value="类数组" @click="getClassArray">

  </div>
</template>

<script>
  import watchTest from '../components/watchTest.vue';
  import dataTest from '../components/dataTest.vue';
  import vuexTest from '../components/vuexTest.vue';
  import slotTest from '../components/slotTest.vue';
  import {
    Toast
  } from 'mint-ui';
  import {
    PERSONS
  } from '../vuex/mutations-type';
  // import Velocity from 'velocity-animate'
  var mixin = {
    created: function () {
      console.log('混入对象的钩子被调用')
    }
  }
  export default {
    name: 'test',
    mixins: [mixin],
    components: {
      'watch-test': watchTest,
      dataTest,
      vuexTest,
      slotTest
    },
    data() {
      return {
        msg: '测试页面',
        boyA: 1,
        date: '',
        cdata: 2,
        dataTestShow: true
      }
    },
    // 局部指令
    directives: {
      test: {
        inserted(el, binding) {
          // console.log(el)
          console.log('指令value', binding)
        },
      }
    },
    created() {
      this.method()
      this.method2()
      this.method3()
      this.date = new Date().getTime()
      // console.log(this.$store.state.author)
      // console.log(this.$store.getters.changeAuthor)
    },
    mounted() {
      this.method()
      // console.log(this.method())
      console.log(this.$msg)
      // console.log(this.$myMethod())
    },
    methods: {
      changboyA() {
        this.boyA += 1
        console.log(this.boyA)
      },
      receiveLove(data) {
        console.log('父组件响应子组件事件', data)
      },
      changstore() {
        this.$store.state.author = '测试一下'
        console.log(this.$store.state.author)
      },
      mutationsStore() {
        // this.$store.commit('authorMutations', 'newValue')
        this.$store.commit('AUTHOR', 'newValue')
        console.log(this.$store.state.author)
      },
      action() {
        this.$store.dispatch('actionsTest')
        console.log(this.$store.state.author)
      },
      toast() {
        // Toast('Upload Complete');
        // this.$toast('66')
        Toast({
          message: 'Upload Complete',
          position: 'bottom',
          duration: 5000
        });
      },
      toastClick() {
        this.$toast('自定义toast插件测试')
      },

      addData() {
        this.cdata += 2
        this.dataTestShow = false
        this.dataTestShow = true
      },

      /**
       * vuex中存储的变量在个组件中是响应式的
       */
      changePersons() {
        this.$store.state.persons.push({
          id: 3,
          name: '小张'
        })
      },
      changePersons2() {
        var list = [{
            id: 1,
            name: '太阳'
          },
          {
            id: 2,
            name: '月亮'
          }
        ]
        this.$store.commit(PERSONS, list)
      },

      // 解构测试函数
      solveFn() {

        // 数组解构
        function a([a,b]) {
          console.log('数组解构',a, b)
        }
        var arr1 = [1, 2]
        a(arr1)

        // 对象解构
        function b({bb, aa}) {   //字段名相对应
          console.log('对象解构', aa, bb)
        }
        var obj1 = {
          aa: 'aa',
          bb: 'bb'
        }
        b(obj1)
      },

      // 获取Vue实例
      getVue() {
        console.log(vm)
        console.log(this.vm)
      },

      // 类数组对象
      getClassArray() {
        //只包含使用从零开始，且自然递增的整数做键名，并且定义了length表示元素个数的对象，我们就认为他是类数组对象！
        var arr = [1, 2, 3];
        var obj = {
          0: 1, 
          1: 2, 
          2: 3, 
          length: 3
          };
        console.log('arr[0]', arr[0])
        console.log('obj[0]', obj[0])
        
        // 赋值
        obj[0] = 9
        console.log('obj[0]赋值后', obj[0])
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .test-box{
    padding-left: 0.1rem;
  }
  .lessTest {
    font-size: 50/2px
  }

  .element {
    width: 150px;
    height: 150px;
    background-color: pink;
  }

  .rem-test {
    font-size: 0.4rem;
  } //vh、vw
  .vw-a {
    display: inline-block;
    width: 50vw;
    background-color: pink;
  }

  .vw-b {
    display: inline-block;
    width: 20vw;
    background-color: pink;
  }

</style>

