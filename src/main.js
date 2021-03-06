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
import axios from '@/config/public.js'
import VueWebsocket from "vue-websocket";
import md5 from 'js-md5';
/* eslint-disable no-new */
Vue.prototype.$md5 = md5;
Vue.use(ElementUI);
// Vue.use(VueWebsocket);
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 