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
            title: ''
        }
    },
    // props: ['addTodo'],
    methods: {
        // add 回车添加任务的回调
        add() {
            // 检验输入的数据不为空
            if(!this.title.trim()) return alert("输入不能为空")
            // 输入数据不为空，将数据包装为对象
            const todoObj = {id: nanoid(), tname: this.title, done: false}
            // 通知父组件App添加任务
            // this.addTodo(todoObj)
            this.$emit('addTodo', todoObj)
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