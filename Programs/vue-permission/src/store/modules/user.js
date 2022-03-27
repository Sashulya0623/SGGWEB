// 创建并暴露store
export default {
    namespaced: true,
    // state 存储数据
    state: {
        user: {}
    },
    // getters
    getters: {

    },
    //  actions响应组件中的动作
    actions: {

    },
    //  mutations 用于操作数据(state)
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    }
}