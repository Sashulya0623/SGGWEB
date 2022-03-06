<template>
    <div class="wrapper">
        <button @click="show = !show">显示/隐藏</button>
        <!-- 想给谁添加动画或者过渡效果，就给它包裹一个transition标签 
            浏览器不解析transition标签，vue才会识别
        -->
        <transition name="bounce" appear>
            <p v-show="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </transition>
        
    </div>
</template>

<script>
export default {
    name: 'Test1',
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

/* v-enter-active 和 v-leave-active 设置进入/离开过渡的不同的缓和曲线 
    若过渡有名称,则改为 bounce-enter-active 和 bounce-leave-active
    若想动画一上来就有效果，添加apper属性且值为true，
    :appear="true" 或appear
*/
.bounce-enter-active {
    animation: bounce-move .5s linear;
}

.bounce-leave-active {
    animation: bounce-move .5s linear reverse;
}


/*动画 */
@keyframes bounce-move {
    0% {
        transform: translateX(-100%)
    }

    100% {
        transform: translateX(0px)
    }
}
</style>