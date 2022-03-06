<template>
    <div class="wrapper">
        <button @click="show = !show">显示/隐藏</button>
        <!-- 想给谁添加动画或者过渡效果，就给它包裹一个transition标签 
            浏览器不解析transition标签，vue才会识别,
            transition标签只能被使用在单个元素
            多个元素使用transiton-group，且每个元素有key
        -->
        <transition-group name="bounce" appear>
            <p v-show="show" key="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p v-show="!show" key="2">avtrusova</p>
        </transition-group>
        
    </div>
</template>

<script>
export default {
    name: 'Test2',
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

/* 进入的起点、离开的终点 */
.bounce-enter,.bounce-leave-to{
	transform: translateX(-100%);
}
/* 进入/离开过渡的不同的缓和曲线 */
.bounce-enter-active,.bounce-leave-active{
	transition: 0.5s linear;
}
/* 进入的终点、离开的起点 */
.bounce-enter-to,.bounce-leave{
	transform: translateX(0);
}

</style>