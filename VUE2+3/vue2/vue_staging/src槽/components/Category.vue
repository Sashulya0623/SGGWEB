<template>
    <div class="list">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot name="center" :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['listData','title'],
    data() {
        return {
            games:['红色警戒','穿越火线','劲舞团','超级玛丽']
        } 
    }
}
</script>

<style lang="less" scoped>
.list {
    width: 200px;
    height: 300px;
    background-color: rgba(44, 239, 253, 0.829);
}

h3 {
    text-align: center;
    background-color: yellow;
}

</style>