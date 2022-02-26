<template>
    <div class="app">
        <!-- ref打标识 -->
        <h2 v-text="message" ref="hone"></h2>
        <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
        <Student ref="com"/>
    </div>
</template>

<script>
import Student from './components/Student'
export default {
    name: 'App',
    components:{
        Student
    },
    data() {
        return {
            message: '欢迎学习vue'
        }
    },
    methods: {
        showDom() {
            // this.$refs.xxx使用ref
            console.log(this.$refs.hone) // h2标签
            console.log(this.$refs.btn) // button标签
            console.log(this.$refs.com) // student组件实例对象
        }
    }
}
</script>