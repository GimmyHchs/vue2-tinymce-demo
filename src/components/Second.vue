<template>
    <div>
        I'm an 2 component!
        <button @click="plus(2)">+</button>
    </div>
</template>

<script>
    export default {
        methods:{
            plus(count){
                this.$store.state.count+=count;
            }
        },
        mounted() {
            console.log('2 Component ready.')
        }
    }
</script>
