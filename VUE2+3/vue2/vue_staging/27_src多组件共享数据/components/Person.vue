<template>
    <div class="list">
        <h3>人员列表</h3>
        <input type="text" placeholder="请输入名称" v-model="name">
        <button @click="addPer">添加人员</button>
        <ul>
            <li v-for="(p, index) in personList" :key="index">{{p.name}}</li>
        </ul>
        <h3>count记数和：{{counter}} </h3>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personList
        },
        counter() {
            return this.$store.state.counter
        }
    },
    methods: {
        addPer() {
            // 错误的，不要直接修改state中的值
            // const P = this.$store.state.personList
            // const pobj = {id: nanoid(),name: this.name}
            // P.unshift(pobj)
            // this.name = ''

            const pobj = {id: nanoid(),name: this.name}
            this.$store.commit('ADD_PERSON', pobj)
            this.name = ''

        }
    }
}
</script>

<style lang="less" scoped>

</style>