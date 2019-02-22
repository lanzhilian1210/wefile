import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const price  = () => import('@/pages/price')
const priceChoice = () => import('@/pages/priceChoice')
const about = () => import('@/pages/about') //about组件
const user = () => import('@/pages/user') // 个人中心
const upload = () => import('@/pages/upload') // 上传upload
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
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
    },
    {
      path:'/about',
      name:'about',
      component: about
    },
    {
      path:'/user',
      name:'user',
      component: user
    }
  ],
  
})
export default router
