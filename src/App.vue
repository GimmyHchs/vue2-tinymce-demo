<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <h2>Store</h2>
        <div>
            Count : {{count}}
            <span class="plus">
                <button @click="plus(1)">+</button>
            </span>
        </div>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
        <router-link to="/first">Go to First</router-link>
        <router-link to="/second">Go to Second</router-link>
    </ul>


    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  computed:{
      count(){
          return this.$store.state.count
      }
  },
  methods:{
      plus(count){
          this.$store.state.count += count
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
.plus{
    margin-left: 15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
