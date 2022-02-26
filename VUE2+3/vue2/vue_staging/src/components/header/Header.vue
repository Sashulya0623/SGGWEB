<template>
    <div class="header">
        <input type="text" v-model="title" @keyup.enter="add" placeholder="请输入你的任务名称，按回车确定">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Header',
    data() {
        return {
            // 收集用户输入的title
            title: ''
        }
    },
    // 接收从App传递过来的addTodo
	props:['addTodo'],
    methods: {
       add(){
	   	   // 校验数据
	   	   if(!this.title.trim()) return alert('输入不能为空')
	   	   // 将用户的输入包装成一个todo对象
	   	   const todoObj = {id:nanoid(),tname:this.title,done:false}
	   	   // 通知App组件去添加一个todo对象
	   	   this.addTodo(todoObj)
	   	   // 清空输入
	   	   this.title = ''
	   } 
    }

}
</script>

<style scoped>
/* header */
.header {
    margin-bottom: 15px;
}

.header input {
    width: 574px;
    height: 36px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    text-indent: 0.5em;
    outline: none;
}

.header input:focus {
    border: 1px solid #75B9F0;
    box-shadow: 0 0 5px #75B9F0;
}
</style>