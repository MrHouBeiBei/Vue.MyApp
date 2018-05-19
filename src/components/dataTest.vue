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
        testData: Number
    },
    data() {
        return {
            data2: this.testData,
            data3: ''
        }
    },
    watch:{
        testData(val) {
            console.log(val)
            this.data3 = val
        }
    }
}
</script>
