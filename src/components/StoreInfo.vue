<template>
    <div class="card text-xs-center info-position">
      <div class="card-header">
        Vuex Store Info
      </div>
      <select v-model="now_click" class="form-control form-control-sm">
          <option value="states">States</option>
      </select>
      <div class="card-block">
      <template v-if="isClick('states')" v-for="(state, index) in store_states">
            <div>{{index}} : {{state}}</div>
      </template>
    </div>
      <div class="card-footer text-muted"> </div>
    </div>
</template>
<style>
    .info-position{
        position: fixed !important;
        width: 15%;
        right: 10px;
        bottom: 10px;
    }
    .info-item{
        width: 100%;
        margin-left: 0;
    }
</style>
<script>
    export default {
        data(){
            return {
                now_click : 'states',
            };
        },
        computed:{
            store_states(){
                return this.$store.state;
            },
            count(){
                return this.$store.state.count;
            }
        },
        methods:{
            isClick(str){
                if(this.now_click == str)
                    return true;
                return false;
            },
            changeTo(str){
                this.now_click = str;
            }
        },
        mounted() {
            console.log('StoreInfo Component ready.')
        }
    }
</script>
