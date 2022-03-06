import Vue from 'vue'
import App from './App.vue'
import less from 'less'
// 引入store
import store from './store'
 
Vue.use(less)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
  
}).$mount('#app')
