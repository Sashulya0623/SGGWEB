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
    mode:'history',
    routes:[
        {
            path: '/',
            // 路由重定向
            redirect: '/about'
        },
        {
            name: 'about',
            path: '/about',
            component: About,
            meta:{isAuth:true,title:'关于'}
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: {
                        // 查看权限
                        isAuth: true,
                        title: '新闻'
                    }
                },
                {
                    path: 'messages',
                    component: Messages,
                    meta: {
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
							// props:{a:1,b:'hello'}

							//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
							// props:true

							//props的第三种写法，值为函数,推荐
							props($route){
								return {
									id: $route.query.id,
									title: $route.query.title,
									a: 1,
									b: 'hello'
								}
							},
                            meta: {
                                title: '详情'
                            },
                        },
                    ]
                },
            ]
        }
    ]
})

// 要求1
// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next)=> {
//     // to 即将要进入的目标路由组件
//     // from 当前导航正要离开的路由
//     // next 进行下一步
//     console.log('前置路由守卫',to,from)
// 	if(to.meta.isAuth){ //判断是否需要鉴权
// 		if(localStorage.getItem('school')==='atguigu'){
// 			next()
// 		}else{
// 			alert('学校名不对，无权限查看！')
// 		}
// 	}else{
// 		next()
// 	}
// })

// 要求2
// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '硅谷系统'
})

//暴露router
export default router