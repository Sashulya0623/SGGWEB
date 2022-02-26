<template>
    <div id="school">
        <!-- mySlice是插件plugins.js定义的过滤器 -->
        <h2>名字: {{name | mySlice}}</h2>
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