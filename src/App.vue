<template>
  <div id="app">
     <nav class="navbar navbar-light bg-faded">
    <ul class="nav navbar-nav">
      <li class="nav-item">
          <router-link class="nav-link" to="/first">Vue2-tinymce</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/second">Second</router-link>
      </li>
      <span class="navbar-text float-xs-right text-muted">
        <span>123</span>
        <span>123</span>
        <span>123</span>
        <span>123</span>
      </span>
    </ul>
  </nav>

    <store-info v-if="infoswitch"></store-info>
    <button class="info-switch-button" @click="switchInfo()">-</button>

    <div class="container">
        <img src="./assets/logomix.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import StoreInfo from './components/StoreInfo.vue';

export default {
  name: 'app',
  components:{
    'store-info':StoreInfo,
  },
  computed:{
      infoswitch(){
        if(this.$store.state.info_switch)
            return true;
        return false;
      },
      count(){
          return this.$store.state.count
      }
  },
  methods:{
      plus(count){
          this.$store.state.count += count
      },
      switchInfo(){
          this.$store.state.info_switch = !this.$store.state.info_switch;
      }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.info-switch-button{
    position: fixed !important;
    right: 10px;
    bottom: 0;
    height: 20px;
}
.plus{
    margin-left: 15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
