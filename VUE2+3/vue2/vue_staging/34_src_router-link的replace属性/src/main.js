import Vue from 'vue'
import App from './App.vue'
import less from 'less'
// 引入store
// import store from './store'

import VueRouter from 'vue-router'
import router from './router/index'
 
Vue.use(less)

Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // store
  router
  
}).$mount('#app')
