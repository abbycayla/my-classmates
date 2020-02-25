import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import liv from './components/liv/Liv.vue';

import Anton from "./components/anton/Anton"

Vue.config.productionTip = false


Vue.use(VueRouter);

const routes = [
  {
    name:"home",
    path:"/"
  },
  {
    name:"anton",
    path:"/anton",
    component: Anton
  },
  {
  path:'/liv',
  component: liv,
}
]
              

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
