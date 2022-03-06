<template>
    <section class='jumbotron'>
      <h3>搜索github用户</h3>
      <div>
        <input  type="text" v-model="keyWords" placeholder='请输入关键词进行搜索'/>
        &nbsp;
        <button @click="searchUsers">搜索</button>
      </div>
    </section>
</template>

<script>

export default {
    name: 'Search',
    data() {
        return {
            keyWords: ''
        }
    },
    methods: {
        // 搜索回调
        searchUsers() {
            // console.log(this);

            // 请求前更新List的数据
			this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false})
            // 发起网络请求
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
                response => {
                    // console.log('成功了');
                    // // 触发事件
                    // this.$bus.$emit('getUsers', response.data.items)
                    //请求成功后更新List的数据
					this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error => {
                    console.log('失败了',error.message);
                    // 请求后更新List的数据
					this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                }
            )

            
        }
    },
    
}
</script>

<style lang="less" scoped>

</style>