import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home')
const Price = () => import('@/pages/price')
const demo = () => import('@/pages/demo')
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
    }
  ]
})
