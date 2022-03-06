<template>
    <div class="box">
        <h3>当前计数: {{counter}}</h3>
        <!-- 下拉框 -->
        <select v-model.number="num">
         <option value ="1">1</option>
         <option value ="2">2</option>
         <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="addOdd">当前技术为奇数再加</button>
        <button @click="delayAdd">延迟加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            counter: 0,
            num: 1
        }
    },
    methods: {
        add() {
            this.counter += this.num
        },
        sub() {
            this.counter -= this.num
        },
        addOdd() {
            if(this.counter % 2 !== 0) {
               this.counter += this.num 
            }
        },
        delayAdd() {
            setTimeout(()=> {
                this.counter += this.num
            },3000)
        }
    }
}
</script>

<style lang="less" scoped>

</style>