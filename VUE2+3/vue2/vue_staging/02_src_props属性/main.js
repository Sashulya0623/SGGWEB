// 引入vue
import Vue from 'vue'

// 引入App组件
import App from './App'

// 关闭生产提示
Vue.config.productionThip = false

// 创建vm实例
new Vue({
    el: '#app',
    render: h => h(App)
})