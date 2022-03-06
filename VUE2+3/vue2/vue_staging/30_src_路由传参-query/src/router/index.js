//引入VueRouter
import VueRouter from 'vue-router'
//引入Luyou 组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            path: '/',
            // 路由重定向
            redirect: '/about'
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            path: 'detail',
                            component: Detail
                        },
                    ]
                },
            ]
        }
    ]
})

//暴露router
export default router