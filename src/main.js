import Vue from 'vue'
import App from './App.vue'
import './styles/base.less'
import './styles/iconfont.less'
import 'lib-flexible'
import router from './router'

// 关闭提示
Vue.config.productionTip = false
// 全局注册
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-button', HmButton)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
