<template>
    <div>
        I'm an 1 component!
        <div>
            I got Vuex Store Count : {{count}}
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
        mounted() {
            console.log('1 Component ready.')
        }
    }
</script>
