<template>
  <div>
    <h2>{{msg}}</h2>
    <watch-test :oneString="boyA" @girlToBoy="receiveLove"></watch-test>
    
    <button @click="changboyA">改变父组件变量</button>
  </div>
</template>

<script>
import watchTest from '../components/watchTest.vue'

export default {
  name:'test',
  components: {
    'watch-test': watchTest
  },
  data () {
    return {
      msg: '测试页面',
      boyA: 1
    }
  },
  methods: {
    changboyA() {
      this.boyA += 1
      console.log(this.boyA)
    },
    receiveLove(data) {
      console.log('父组件响应子组件事件', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
