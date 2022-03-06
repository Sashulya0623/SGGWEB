<template>
    <div class="box">
        
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
        <button @click="ADD(num)">+</button>
        <button @click="SUB(num)">-</button>
        <button @click="addodd(num)">当前计数为奇数再加</button>
        <button @click="delayodd(num)">延迟加</button>
        <h3>person总人数： {{personCount}}</h3>
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
		// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
		...mapMutations(['ADD','SUB']),

		// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
		...mapActions(['addodd','delayodd'])
    },
    computed:{
			// 借助mapState生成计算属性，从state中读取数据。（数组写法）
			...mapState(['counter','school','subject']),

			// 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigCount']),

            // person 人数
            personCount() {
                return this.$store.state.personList.length
            }

	}
}
</script>

<style lang="less" scoped>

</style>