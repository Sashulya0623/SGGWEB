<template>
    <div class="app">
        <!-- <Student name="tom" sex="女" age=19 /> -->
        <!-- 上面的age传进去的是字符串，下面的是数字 -->
        <Student name="tom" sex="女" :age="19" />
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
        
    }
}
</script>