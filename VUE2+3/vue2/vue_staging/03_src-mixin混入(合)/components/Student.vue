<template>
    <div id="student">
        <h2>名字: {{name}}</h2>
        <h2>性别: {{sex}}</h2>
        <button @click="showName">弹出名字</button>
    </div>  
</template>

<script>
// 1. 局部引入混合文件
// import {mixin,mixin2} from '../mixin'

export default {
    name: 'Student',
    data() {
        return {
            name: 'Tom',
            sex: '男'
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