<template>
    <div>
        <p>{{testData}}</p>
        <p>{{data2}}</p>
        <p>{{data3}}</p>
    </div>
</template>

<script>
export default {
    props: {
        testData: Number,
        // testData: {
        //     type: Number,
        //     default: 0
        // }
    },
    data() {
        return {
            data2: this.testData,
            data3: ''
        }
    },
    created() {
        console.log('data-test created', 1)
    },
    mounted() {
        console.log('data-test mounted', 2)
    },
    watch:{
        // 页面第一次渲染的时候不触发
        testData(val) {
            console.log('data-test', 3)
            // console.log(val)
            this.data3 = val
        }
    }
}
</script>
