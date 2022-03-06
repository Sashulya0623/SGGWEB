<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <Item v-show="info.users.length" v-for="user in info.users" :key="user.login" :user="user" />
        <!-- 第一次进入页面，展示欢迎词 -->
        <h2 v-show="info.isFirst">欢迎使用</h2>
        <!-- 搜索中 -->
        <h1 v-show="info.isLoading">加载中....</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{info.errMsg}}</h1>
    </div>
</template>

<script>
import Item from '../Item/Item'
export default {
    name: 'List',
    data() {
        return {
            info: {
				isFirst:true,
				isLoading:false,
				errMsg:'',
				users:[]
			}
            
        }
    },
    components: {
            Item
    },
    mounted() {
        // 创建自定义事件
        // this.$bus.$on('getUsers',(users)=> {
        //     console.log("收到数据",users);
        //     this.info.users = users
        // })

        // 数据更新
        this.$bus.$on('updateListData',(dataObj)=>{
            // 用dataObj的内容去替换this.info, 被修改了的数据才会被替换掉
				this.info = {...this.info,...dataObj}
		})

        
    }
    
}
</script>

<style lang="less" scoped>

</style>