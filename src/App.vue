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
        <a href="#">
            <i class="fa fa-github fa-lg with-icon" aria-hidden="true"></i><span class="with-icon">Github</span>
        </a>
        <a href="#">
            <i class="fa fa-circle-o-notch with-icon" aria-hidden="true"></i><span class="with-icon">NPM</span>
        </a>
      </span>
    </ul>
  </nav>

    <store-info v-if="infoswitch"></store-info>
    <button class="info-switch-button" @click="switchInfo()">-</button>

    <div class="container">
        <img src="./assets/logomix.png">
    </div>
    <tinymce></tinymce>
    <router-view></router-view>
  </div>
</template>

<script>
import StoreInfo from './components/StoreInfo.vue'
import TinyMCE from './../vue2-tinymce/src/index.js'

export default {
  name: 'app',
  components:{
    'tinymce':TinyMCE,
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
.with-icon{
    margin-left: 5px;
}
.float-xs-right > a{
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none !important;
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
