// 引入vue
import Vue from 'vue'

// 引入App组件
import App from './App'

// 1. 全局引入混入
import {mixin,mixin2} from './mixin'

// 关闭生产提示
Vue.config.productionThip = false

// 2. 全部使用混入
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建vm实例
new Vue({
    el: '#app',
    render: h => h(App)
})