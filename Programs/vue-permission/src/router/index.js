import Vue from "vue";
import VueRouter from "vue-router";

import homeRoute from './modules/home'

// 解决路由重复报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('../pages/Login')
    },
    {
        path: '/index',
        name: 'index',
        component: ()=> import('../pages/index/Index.vue'),
        children: homeRoute
    }
]

const router = new VueRouter({
    routes
})

export default router