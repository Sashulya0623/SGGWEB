// 创建核心store
// 引入vue支持
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

import userInfo from './modules/user'
// 全局使用vuex插件
Vue.use(Vuex)


// state 存储数据
const state = {

}
// getters
const getters = {

}
//  actions响应组件中的动作
const actions = {

}
//  mutations 用于操作数据(state)
const mutations = {

}

// 创建并暴露store
export default new Vuex.Store({
    state: state,
    actions,
    mutations,
    getters,
    modules: {
        userInfo
      },
})