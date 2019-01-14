import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const price  = () => import('@/pages/price')
const priceChoice = () => import('@/pages/price2')
const about = () => import('@/pages/about') //about组件
const user = () => import('@/pages/user') // 个人中心
const demo = () => import('@/pages/demo') // 上传demo
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
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
router.beforeEach((to, from, next) => {  
  alert('beforeEach',2)
  // if(window.location.href.indexOf('code')>=0){  
  //   //如果url中包含code,则保存到store中  
  //   let code = window.location.href.split("?")[1];  
  //   code = code.substring(5,code.indexOf('&'));  
  //   store.state.code = code;  
  // } 
 localStorage.setItem('token1',to)
 localStorage.setItem('token3',from)
  console.log(to.from); 
  next()  
})  
export default router
