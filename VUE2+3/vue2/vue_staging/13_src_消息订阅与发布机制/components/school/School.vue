<template>
    <div class="school">
        <h2>学校名称：{{sname}},学生姓名：{{stuname}}</h2>
        <h2>学校地址： {{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'School',
    data() {
        return {
            sname: '水晶俱乐部',
            address: '俄罗斯',
            stuname: ''
        }
    },
    methods: {
       
    },
    mounted() {
        // 订阅消息
       this.pid = pubsub.subscribe('shasa',(msgName, data)=> {
        //    msgName为消息的名称，不使用的话可以用占位符__
           this.stuname = data
       })
    },

    beforeDestroy() {
        // 取消订阅
       pubsub.unsubscribe(this.pid) 
    }
}
</script>

<style scoped>
.school {
    background-color: #bfa;
}
</style>