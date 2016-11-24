import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store.js';

require('./assets/bootstrap/css/bootstrap.min.css');
require('./../vue2-tinymce/src/index.js');

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
