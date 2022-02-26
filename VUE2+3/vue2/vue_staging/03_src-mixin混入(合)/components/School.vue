<template>
    <div id="school">
        <h2>名字: {{name}}</h2>
        <h2>地址: {{address}}</h2>
        <button @click="showName">弹出名字</button>
    </div>  
</template>

<script>
// 1. 局部引入混合文件
// import {mixin,mixin2} from '../mixin'

export default {
    name: 'School',
    data() {
        return {
            name: '十佳',
            address: '星河',
            x: 666
        }
    },
    // methods: {
    //     showName() {
    //         alert(this.name)
    //     }
    // },

    // 2. 使用混入
    // mixins: [mixin,mixin2]
    
}
</script>