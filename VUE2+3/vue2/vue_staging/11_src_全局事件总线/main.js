import Vue from 'vue'
import App from './App.vue'
import less from 'less'

Vue.use(less)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 在vue实例创建之前,在vue原型上安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
