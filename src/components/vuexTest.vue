<template>
    <div>
        <ul>
            <li v-for="(item, index) of $store.state.persons" :key="index">
            <!-- <li v-for="(item, index) of persons" :key="index"> -->
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // persons: this.$store.state.persons
        }
    },
    created(){
        // console.log(this.$store.state)
    },
    methods: {

    }
}
</script>

