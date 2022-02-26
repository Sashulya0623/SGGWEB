// 引入vue
import Vue from 'vue'

// 引入App组件
import App from './App'

// 1. 引入插件
import plugins from './plugins'

// 关闭生产提示
Vue.config.productionThip = false

// 2. 应用（使用）插件
Vue.use(plugins,1,2,3)

// 创建vm实例
new Vue({
    el: '#app',
    render: h => h(App)
})