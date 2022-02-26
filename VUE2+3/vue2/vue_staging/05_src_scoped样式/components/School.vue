<template>
<!-- 
    style样式为了防止类名冲突，使用scoped属性，让样式在组件内局部生效
 -->
    <div class="tomato"> 
        <span class="title">学校</span>
        <h2>名字: {{name}}</h2>
        <h2>地址: {{address}}</h2>
    </div>  
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            name: '十佳星河胜万里',
            address: '星河',
        }
    }
    
}
</script>

<style scoped>
.tomato {
    background-color: tomato;
}
</style>