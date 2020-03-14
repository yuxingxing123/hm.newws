import Vue from 'vue'
import App from './App.vue'
import './styles/base.less'
import './styles/iconfont.less'
import 'lib-flexible'
import router from './router'
import axios from 'axios'

// 关闭提示
Vue.config.productionTip = false
// 全局注册
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'
import HmInput from './components/HmInput.vue'
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-button', HmButton)
Vue.component('hm-input', HmInput)
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
