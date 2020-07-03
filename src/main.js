import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store'
import Accounting from 'accounting-js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    } else {
      return { x: 0, y: 0}
    }
  }
})

Vue.filter('currency', val => Accounting.formatMoney(val))


// router.beforeEach((to, from, nex) => {
// alert('navigation triggered')
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')