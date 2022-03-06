<template>
    <div class="school">
        <h2>学校名称：{{sname}},学生姓名：{{stuname}}</h2>
        <h2>学校地址： {{address}}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            sname: '水晶俱乐部',
            address: '俄罗斯',
            stuname: this.stuname || ''
        }
    },
    methods: {
       
    },
    mounted() {
        // 在总线上创建自定义事件接收数据
        this.$bus.$on("send-name",(stuname)=> {
            this.stuname = stuname
        })
    },

    beforeDestroy() {
        // 在组件销毁前，销毁自定义事件
        this.$bus.$off('send-name')
    }
}
</script>

<style scoped>
.school {
    background-color: #bfa;
}
</style>