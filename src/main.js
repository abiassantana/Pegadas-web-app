import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LoadScript from 'vue-plugin-load-script';

import cadDeveloper from './components/cadDeveloper.vue'
import home from './components/home.vue'
import homeDev from './components/homeDeveloper.vue'
import loginDev from './components/loginDeveloper.vue'
import profileDev from './components/profileDeveloper.vue'
import profileDevListDev from './components/perfilDeveloperListDevs.vue'
import profileDevListGames from './components/perfilDeveloperListGames.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(LoadScript)

const routes = [
  {path: '/', name:'Home', component: home},
  {path: '/developer/signup', name:'signupDev', component: cadDeveloper},
  {path: '/developer', name:'homeDev', component: loginDev},
  {path: '/developer/signin', name:'signinDev', component: loginDev},
  {path: '/developer/perfil', name:'profileDev', component: profileDev},
  {path: '/developer/perfil/listDevelopers', name:'profileDevListDev', component: profileDevListDev},
  {path: '/developer/perfil/listGames', name:'profileDevListGames', component: profileDevListGames},
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
