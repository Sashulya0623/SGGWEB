<template>
    <div class="list">
        <h3>{{title}}分类</h3>
        <ul>
            <li v-for="(item,index) in listData" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['listData','title']
}
</script>

<style lang="less" scoped>
.list {
    width: 200px;
    height: 200px;
    background-color: rgba(44, 239, 253, 0.829);
}

h3 {
    text-align: center;
    background-color: yellow;
}

</style>