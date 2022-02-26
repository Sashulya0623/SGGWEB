<template>
    <div id="student">
        <!-- 修改传进来的属性值：不要直接修改传进来的属性值，而是在本组件
        的data函数中定义变量接收属性值，从而修改
         -->
        <h2>名字: {{name}}</h2>
        <h2>性别: {{sex}}</h2>
        <h2>年龄: {{myAge + 1}}</h2>
        <button @click="updateAge">修改收到的年龄</button>
    </div>  
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            myAge: this.age
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // 从父组件传进来的参数会成为子组件实例对象的属性

    // 1. 简单声明接收的属性
    // props: ['name','sex','age']

    // 2. 接收的同时对传进来的数据进行类型限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number
    // }

    // 3. 声明的同时限制数据类型
    props: {
        name:{
				type: String, // name的类型是字符串
				required: true, // name是必要传的
		},
		age:{
			type: Number,
			default: 99 // 默认值
		},
		sex:{
			type: String,
			required: true
		}
    }
}
</script>