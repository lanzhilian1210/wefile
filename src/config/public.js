// 获取token
import axios from 'axios'
function getToken () {
  var token = sessionStorage.getItem("token")
  return token
}
 
// 拦截加请求头
axios.defaults.baseURL = 'http://api.wefile.com'

axios.interceptors.request.use((config) => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  if (config.method === 'put') {
    if (config.url.indexOf('login') === -1) {
      config.headers.authorization = getToken() 
    }
    // config.data = qs.stringify(config.data)  
  } else if (config.method === 'get') {
    config.headers.authorization = getToken()
  }
  
  return config
}, (error) => { 
  return Promise.reject(error)
})  
export default axios
