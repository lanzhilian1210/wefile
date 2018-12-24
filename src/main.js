// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/media.css'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

/* eslint-disable no-new */
Vue.use(ElementUI);
//  请求拦截器
// 拦截加请求头
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) { // 每次请求时会从localStorage中获取token
  let token = localStorage.getItem('token');
  if (token) {  
      token = 'Bearer '+ localStorage.getItem("token"); // 把token加入到默认请求参数中
      config.headers.common['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器

axios.interceptors.response.use(function (response) { // ①10010 token过期（30天） ②10011 token无效
 
  if (response.data.code === 10010 || response.data.code === 10011) {
   
      // localStorage.removeItem('token') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
      console.log('过期');
      router.replace({
   
          path: '/login' // 到登录页重新获取token
   
      })
   
  } else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
      console.log(response);
     localStorage.setItem('token', response.data.token) // 覆盖原来的token(默认一天刷新一次)
   
  }
   
      return response
   
  }, function (error) {
   
      return Promise.reject(error)
   
  })  
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
