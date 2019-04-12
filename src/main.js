import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import cadDeveloper from './components/cadDeveloper.vue'
import home from './components/home.vue'
import homeDev from './components/homeDeveloper.vue'
import loginDev from './components/loginDeveloper.vue'
import profileDev from './components/profileDeveloper.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {path: '/', name:'Home', component: home},
  {path: '/developer/signup', name:'signupDev', component: cadDeveloper},
  {path: '/developer', name:'homeDev', component: loginDev},
  {path: '/developer/signin', name:'signinDev', component: loginDev},
  {path: '/developer/perfil', name:'profileDev', component: profileDev}
  
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
