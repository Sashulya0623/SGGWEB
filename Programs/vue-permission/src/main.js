import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

import './assets/style/reset.css'

// 引入ElementUI组件库
import ElementUI from 'element-ui'
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'

import './mock/index'

import store from './store/index'



Vue.config.productionTip = false

// 应用ElementUI
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
