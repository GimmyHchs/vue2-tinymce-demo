import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store.js';

require('./../vue2-tinymce/dist/vue2-tinymce.js');
require('./assets/bootstrap/css/bootstrap.min.css');

Vue.use(VueTinyMCE);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
