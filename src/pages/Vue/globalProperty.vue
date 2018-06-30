<template>
  <div>
    <h-breadcrumb :list="readcrumbList"></h-breadcrumb>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="vue自有属性、可枚举属性" name="vue">
          <h4>"Object.getOwnPropertyNames(this)"</h4> {{propertyList.length}}个
          <div>
              {{propertyList}}
          </div>
          <h4>可枚举属性</h4>
          <div>
              {{isEnumerableList}}
          </div>
      </el-tab-pane>
      <el-tab-pane label="window自有属性" name="window">
          <h4>"Object.getOwnPropertyNames(window)"</h4> {{propertyList.length}}个
          <div>
              {{propertyList}}
          </div>
          <div>
              {{isEnumerableList}}
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  //   import HBreadcrumb from '../menu/HBreadcrumb.vue'

  export default {
    // components: {
    //   HBreadcrumb
    // },
    data() {
      return {
        readcrumbList: [{
            name: 'vue',
            path: {}
          },
          {
            name: '全局属性',
            path: {}
          },
        ],
        activeName: 'vue',
        propertyList: [],
        isEnumerableList: []
      }
    },
    created() {
    },
    mounted() {
        var initData = {
            name: 'vue'
        }
        this.handleClick(initData)
    },
    methods: {
        handleClick(value) {
            console.log(value)
            this.isEnumerableList = []
            if(value.name === 'vue') {
                this.propertyList = Object.getOwnPropertyNames(this)
                Object.keys(this).forEach( item => {
                    this.isEnumerableList.push(item)
                })
            } else {
                this.propertyList = Object.getOwnPropertyNames(window)
                // Object.keys(window).forEach( item => {
                //     this.isEnumerableList.push(item)
                // })
            }
        }
    }
  }
</script>


<style>
</style>
