<template>
    <div style="display: flex">
        <ul style="flex:1">
            <li v-for="(item, index) of $store.state.persons" :key="index">
                {{item.name}}
            </li>
        </ul>

        <ul style="flex:1">
            <li v-for="(item, index) of list" :key="index">
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
            persons: this.$store.state.persons
        }
    },
    created(){
        // console.log(this.$store.state)
    },
    computed: {
        list() {
            var data = this.$store.state.persons
            data.forEach(item => {
                if (!item.name.includes('大海')) item.name += ' 大海'
            });
            return data;
        }
    },
    methods: {

    }
}
</script>

