# 响应式
## 1. 面试题
1. rem是什么？
   px，绝对长度单位，最常用
   em，相对长度单位，相对于父元素，不常用
   rem，相对长度单位，相对于根元素html,常用于响应式布局
2. 如何实现响应式？
   响应式布局的常用方案
    1. rem
      media-query，根据不同的屏幕宽度设置根元素font-size
      rem，基于根元素的相对单位
      rem的弊端：具有阶梯形

    1. vw-vh
      window.screen.height  屏幕高度
      window.innerHeight 网页视口高度
      document.body.clientHeight body内容高度
      vh 网页视口高度的1/100
      vw 网页视口宽度的1/100
      vmax取两者最大值，vmin取两者最小值