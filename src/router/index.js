import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const price  = () => import('@/pages/price')
const priceChoice = () => import('@/pages/price2')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/price',
      name:'price',
      component: price
    },
    {
      path:'/priceChoice',
      name:'priceChoice',
      component: priceChoice
    }
  ]
})
