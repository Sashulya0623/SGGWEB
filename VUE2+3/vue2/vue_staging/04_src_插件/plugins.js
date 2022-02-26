export default {
    // Vue 是vue构造函数
    // x,y,z,是使用者传进来的参数
    // install里定义的全局配置可在所有组件中使用
    install(Vue,x,y,z){
		console.log(x,y,z)
        console.log(Vue);
		// 注册全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})

		// 定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

		// 定义混入
		Vue.mixin({
			data() {
				return {
					x:100,
					y:200
				}
			},
		})

		// 给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('你好啊')}
	}
}