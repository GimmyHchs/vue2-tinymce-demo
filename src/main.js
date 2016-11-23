import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
require('./../vue2-tinymce/src/index.js');
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
