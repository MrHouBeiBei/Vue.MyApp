<template>
  <div>
      <h-breadcrumb :list="readcrumbList"></h-breadcrumb>
      6
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
            readcrumbList: [
                {
                    name: 'vue',
                    path: {}
                },
                {
                    name: '全局可枚举属性',
                    path: {}
                }
            ]
        }
    }
  }
</script>


<style>
</style>
