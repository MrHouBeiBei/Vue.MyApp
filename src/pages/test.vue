<template>
  <div>
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
    <h4>Velocity动画库</h4>
    <div class="element" ref="animate"></div>

    <h4>子组件响应式数据测试</h4>
    <input type="button" value="改变数据" @click="addData">
    <div v-if="dataTestShow">
      <data-test :testData="cdata"></data-test>
    </div>
  
  </div>
</template>

<script>
  import watchTest from '../components/watchTest.vue';
  import dataTest from '../components/dataTest.vue';
  import { Toast } from 'mint-ui';
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
      dataTest
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
      this.animate()
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
      animate() {
        Velocity(this.$refs.animate, 
        { width: '100px', height: '100px', opacity: 0.5}, {duration: 4000, delay: 1000, loop: true})
      },
      addData() {
        this.cdata += 2
        this.dataTestShow = false
        this.dataTestShow = true
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .lessTest {
    font-size: 50/2px
  }

  .element{
    width: 150px;
    height: 150px;
    background-color: pink;
  }

</style>

