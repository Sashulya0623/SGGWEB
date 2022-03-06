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
        <!-- mapMutations 对象写法 -->
        <!-- <button @click="addNum(num)">+</button>
        <button @click="subNum(num)">-</button> -->
        <!-- mapMutations 数组写法 -->
        <button @click="ADD(num)">+</button>
        <button @click="SUB(num)">-</button>
        <!-- mapActions 对象写法 -->
        <!-- <button @click="addOddNum(num)">当前计数为奇数再加</button>
        <button @click="delayAddNum(num)">延迟加</button> -->
        <!-- mapActions 数组写法 -->
        <button @click="addodd(num)">当前计数为奇数再加</button>
        <button @click="delayodd(num)">延迟加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    name: 'Count',
    data() {
        return {
            num: 1
        }
    },
    methods: {
        // addNum() {
        //     //  this.$store.commit直接调用mutations中的方法
        //     this.$store.commit('ADD', this.num)
        // },
        // subNum() {
        //     this.$store.commit('SUB', this.num)
        // },

        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
		// ...mapMutations({addNum:'ADD',subNum:'SUB'}),
 
		// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
		...mapMutations(['ADD','SUB']),



        // addOddNum() {
        //     // 调用store中actions中的add方法
        //     // 一般actions方法小写，mutations方法大写，以便区分
        //     // this.$store.dispatch调用的是actions中add，actions再调用mutations中的方法ADD
        //     this.$store.dispatch('addodd', this.num)
        // },
        // delayAddNum() {
        //     this.$store.dispatch('delayodd', this.num)
        // }

        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
		// ...mapActions({addOddNum:'addodd',delayAddNum:'delayodd'})

		// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
		...mapActions(['addodd','delayodd'])
    },
    computed:{
			// 借助mapState生成计算属性，从state中读取数据。（对象写法）
            // he是在插值语法中使用的名称
			// ...mapState({he:'counter',xuexiao:'school',xueke:'subject'}),

			// 借助mapState生成计算属性，从state中读取数据。（数组写法）
			...mapState(['counter','school','subject']),

			// 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
			// ...mapGetters({bigCount:'bigCount'})
			
			// 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigCount'])

	}
}
</script>

<style lang="less" scoped>

</style>