<template>
  <div>
    <!-- 测试组建交互
      组件间通过监听变量触发事件与test页面配合
       -->
    <h4>watch测试</h4>
  </div>
</template>

<script>
  export default {
    props: {
      oneString: Number
    },
    data() {
      return {
        girla: this.oneString
      }
    },
    created() {
      console.log(this.oneString)
    },
    methods: {

    },
    watch: {
      oneString: function (val, oldVal) {
        console.log('子组件监听成功')
        this.$emit('girlToBoy', 'love')
      }
    }
  }

</script>

