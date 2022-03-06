<template>
    <div class="wrapper">
        <!-- 
            第三方集成动画库： animate.css
            npm i animate.css
            引入： import 'animate.css'
            name="animate__animated animate__bounce" 值是固定的
            enter-active-class进入动画
            leave-active-class离开动画
         -->
        <button @click="show = !show">显示/隐藏</button>
        <transition-group 
			appear
			name="animate__animated animate__bounce" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
            <p v-show="show" key="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p v-show="!show" key="2">avtrusova</p>
        </transition-group>
        
    </div>
</template>

<script>
import 'animate.css'

export default {
    name: 'Test3',
    data() {
        return {
            show: true
        }
    }
}
</script>

<style lang="less" scoped>
p {
    width: 500px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    background-color: #bfa;
}



</style>