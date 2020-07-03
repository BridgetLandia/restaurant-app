import Home from './components/Home.vue'
// const Menu = () => import('./components/Menu')
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import Order from './components/Order.vue'
import Basket from './components/Basket.vue'
// const About = () => import(/* webpackChunkName: "menuGroup" */ './components/About')
// const Contact = () => import(/* webpackChunkName: "menuGroup" */ './components/Contact')


export const routes = [
    { path: '/', name: 'homeLink',  components: {
        default: Home,
        'order': Order,
        'delivery': Delivery }
         },
    { path: '/menu', name: 'menuLink', component: Menu},
    { path: '/basket', name: 'basketLink', component: Basket, props: true},
    { path: '/contact', name: 'contactLink', component: Contact},
    { path: '/admin',
     name: 'adminLink', 
     component: Admin,
     beforeEnter: (to, from, next) => {
       alert('This area is for authorized users only, please login to continue.')
       next()
     }
  },
    { path: '/about', name: 'aboutLink', component: About, children: [
      {path: '/delivery', name: 'deliveryLink', component: Delivery},
      {path: '/order', name: 'orderLink', component: Order}
    ]},
    { path: '*', redirect: '/'}
  
  ]