<template>
    <div class="box">
        <h3>当前计数: {{$store.state.counter}}</h3>
        <!-- 下拉框 -->
        <select v-model.number="num">
         <option value ="1">1</option>
         <option value ="2">2</option>
         <option value="3">3</option>
        </select>
        <button @click="addNum">+</button>
        <button @click="subNum">-</button>
        <button @click="addOddNum">当前计数为奇数再加</button>
        <button @click="delayAddNum">延迟加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            num: 1
        }
    },
    methods: {
        addNum() {
            //  this.$store.commit直接调用mutations中的方法
            this.$store.commit('ADD', this.num)
        },
        subNum() {
            this.$store.commit('SUB', this.num)
        },
        addOddNum() {
            // 调用store中actions中的add方法
            // 一般actions方法小写，mutations方法大写，以便区分
            // this.$store.dispatch调用的是actions中add，actions再调用mutations中的方法ADD
            this.$store.dispatch('addodd', this.num)
        },
        delayAddNum() {
            this.$store.dispatch('delayodd', this.num)
        }
    }
}
</script>

<style lang="less" scoped>

</style>