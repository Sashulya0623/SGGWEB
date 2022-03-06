<template>
    <div class="box">
        <!-- <h3>当前计数: {{$store.state.counter}}</h3>
        <h3>我在{{$store.state.school}},学习{{$store.state.subject}}</h3>
        <h3>当前计数放大10倍: {{$store.getters.bigCount}}</h3> -->

        <!-- mapState、mapGetters对象写法 -->
        <!-- <h3>当前计数: {{he}}</h3>
        <h3>我在{{xuexiao}},学习{{xueke}}</h3>
        <h3>当前计数放大10倍: {{bigCount}}</h3> -->

        <!-- mapState、mapGetters数组写法 -->
        <h3>当前计数: {{counter}}</h3>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3>当前计数放大10倍: {{bigCount}}</h3>
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
import {mapState,mapGetters} from 'vuex'

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
    },
    computed:{
			// 借助mapState生成计算属性，从state中读取数据。（对象写法）
            // he是在插值语法中使用的名称
			// ...mapState({he:'counter',xuexiao:'school',xueke:'subject'}),

			//借助mapState生成计算属性，从state中读取数据。（数组写法）
			...mapState(['counter','school','subject']),

			//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
			// ...mapGetters({bigCount:'bigCount'})
			
			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigCount'])

	}
}
</script>

<style lang="less" scoped>

</style>