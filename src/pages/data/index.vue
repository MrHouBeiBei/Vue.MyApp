<template>
  <div>
      <input type="button" value="按钮a" @click="aClick">
      <p>{{a}}</p>
      <br>
      <input type="button" value="按钮b" @click="bClick">
      <p v-if="form.b">{{form.b}}</p>
      <br>
      <input type="button" value="按钮b2" @click="b2Click">
      <p v-if="form.b2">{{form.b2}}</p>
      <br>
      <input type="button" value="按钮c" @click="cClick">
      <p v-if="form.c">{{form.c}}</p>
      <br>
      <input type="button" value="按钮d" @click="dClick">
      <p v-if="form.d&&form.d.e">{{form.d.e}}</p>
      <br>
       <input type="button" value="按钮list" @click="listClick">
      <ul v-if="form.children&&form.children.length > 0">
          <li v-for="(item, index) of form.children" :key="index">{{item.value}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
      return {
          a: 0,
          form: {
              b2: '',
              d: {

              },
              
          }
      }
  },
  created() {
  },
  mounted() {
    //   this.form.children = []
    this.$set(this.form, 'children', [])
  },
  methods: {
      aClick() {
          this.a += 2
      },
      bClick() {
        //   this.form.b = 'b'     //不响应  data中未定义
        //   this.form.b2 = 'b2'   //响应  data中定义
        this.form = Object.assign({}, this.form, {b: 'b'})   //响应
      },
      b2Click() {
          this.form.b2 = 'b2'
      },
      cClick() {
          this.$set(this.form, 'c', 'c')
      },
      dClick() {
        //   if(this.form.d) this.form.d.e = '1'
          if(this.form.d) this.$set(this.form.d, 'e', 'e')
      },
      listClick() {
          this.form.children.push({value: 'a'})
      }
  }
}
</script>

<style lang="less" scoped>

</style>

