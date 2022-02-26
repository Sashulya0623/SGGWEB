<template>
    <div class="app">
        <!-- 
            School组件和Student组件都使用了相同的showName方法
            可以把共同的配置(方法、数据)等单独抽离出来提取成一个混入对象mixin.js
            然后再把mixin中的配置引入到组件中使用
         -->
        <School />
        <hr>
        <Student />
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
    name: 'App',
    components:{
        School,
        Student
    },
    data() {
        return {
            message: '欢迎学习vue'
        }
    },
    methods: {
        
    }
}
</script>