import Vue from 'vue';
import VueRouter from 'vue-router';


// 引入各個 Component
import First from './components/First.vue';
import Second from './components/Second.vue';

// Vue掛載 VueRouter
Vue.use(VueRouter);

// 設定各路由對應的 component
const routes = [
  { path: '/first', component: First },
  { path: '/second', component: Second }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

export default router;
