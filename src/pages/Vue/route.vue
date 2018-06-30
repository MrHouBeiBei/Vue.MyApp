<template>
    <div>
        <h-breadcrumb :list="readcrumbList"></h-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            readcrumbList: [{
                name: 'vue'
            },{
                name: '路由监听'
            }]
        }
    },
    watch: {

    },
    beforeRouteUpdate(to, from, next) {
      // react to route changes...
      // don't forget to call next()
      console.log(123)
    },
}
</script>
