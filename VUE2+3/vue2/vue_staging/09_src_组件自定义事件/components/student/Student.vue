<template>
    <div class="student">
        <h2>学生姓名： {{sname}}</h2>
        <h2>学生性别： {{sex}}</h2>
        <button @click="sendStudentName">传递学生名称</button>
        <button @click="unbind">解绑自定义事件</button>
        <button @click="death">销毁实例</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            sname: 'avtrusova',
            sex: 'female'
        }
    },
    methods: {
        sendStudentName() {
            // 自定义事件名称，传递的参数
            this.$emit("student-name",this.sname,12,34,66)
            // this.$emit("demo",88)
        },

        // 解绑自定义事件
        unbind() {
            // 1. 解绑单个事件
            this.$off('student-name')

            // 2. 解绑多个事件
            // this.$off(['student-name','demo'])

            // 3. 暴力解绑所有事件
            // this.$off()
        },

        death() {
            this.$destroy()// 销毁当前组件实例，销毁后所有组件实例的自定义事件全都失效
        }


    }
}
</script>

<style scoped>
.student {
    background-color: tomato;
}
</style>