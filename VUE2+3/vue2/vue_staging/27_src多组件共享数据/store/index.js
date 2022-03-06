// 创建核心store
// 引入vue支持
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

// 全局使用vuex插件
Vue.use(Vuex)


// state 存储数据
const state = {
    counter: 0,
    school: '水晶俱乐部',
    subject: 'FIVE-FOUR',
    personList: [
        {id:'001',name:'特娃'}
    ]
    
}
// getters 用于将state中的数据进行加工,参数state
const getters = {
    bigCount(state) {
        return state.counter*10
    }
}
//  actions响应组件中的动作
const actions = {
    // // 行为加
    // add(context, value) {
    //     context.commit('ADD', value)
    // },
    // // 行为减
    // sub(context, value) {
    //     context.commit('SUB', value)
    // },
    // 行为 奇数加
    addodd(context, value) {
        if(context.state.counter % 2 !== 0) {
            context.commit('ADD', value) 
        }
    },
    // 行为 延迟加
    delayodd(context, value) {
        setTimeout(()=> {
            context.commit('ADD', value) 
        }, 2000)
    }
}
//  mutations 用于操作数据(state)
const mutations = {
    // 具体操作加
    ADD(state, value) {
        state.counter += value
    },
    // 具体操作减
    SUB(state, value) {
        state.counter -= value
    },
    // 加人
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 创建并暴露store
export default new Vuex.Store({
    state: state,// es6简写   state
    actions,
    mutations,
    getters
})