import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';


import amber from './components/amber/Amber';

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
  path: '/amber',
  component: amber,
}
]


const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
