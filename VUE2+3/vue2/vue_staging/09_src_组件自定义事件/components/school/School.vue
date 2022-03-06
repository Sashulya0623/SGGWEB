<template>
    <div class="school">
        <h2>学校名称：{{sname}}</h2>
        <h2>学校地址： {{address}}</h2>
        <button @click="sendSchoolName">传递学校名称</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            sname: '水晶俱乐部',
            address: '俄罗斯'
        }
    },
    props: ['getSchoolName'],
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.sname)
        }
    }
}
</script>

<style scoped>
.school {
    background-color: #bfa;
}
</style>