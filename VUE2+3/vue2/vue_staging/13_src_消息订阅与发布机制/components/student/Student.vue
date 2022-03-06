<template>
    <div class="student">
        <h2>学生姓名： {{sname}}</h2>
        <h2>学生性别： {{sex}}</h2>
        <button @click="handleClick">传递数据</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'Student',
    data() {
        return {
            sname: 'avtrusova',
            sex: 'female'
        }
    },
    methods: {
        handleClick() {
            // 发布消息
           pubsub.publish('shasa', this.sname)
        }
    }
}
</script>

<style scoped>
.student {
    background-color: tomato;
}
</style>