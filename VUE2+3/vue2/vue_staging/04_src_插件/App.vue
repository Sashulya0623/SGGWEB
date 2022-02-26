<template>
    <div class="app">
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