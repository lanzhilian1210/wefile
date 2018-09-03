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
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
