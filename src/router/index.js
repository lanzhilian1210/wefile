import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home')
const Price = () => import('@/pages/price')
const demo = () => import('@/pages/demo')
const drag = () => import('@/pages/drag')
const login = () => import('@/pages/login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
