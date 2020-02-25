import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import amber from './components/amber/Amber.vue';

Vue.config.productionTip = false


Vue.use(VueRouter);
const routes = [{
  path: '/amber',
  component: amber,
}]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
