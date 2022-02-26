# margin纵向重叠
## 1. 面试题
```html
<!-- 如下代码，AAA和BBB之间的距离是多少 -->
<!-- 1. 相邻元素的margin-top和margin-bottom会发生重叠现象 -->
<!-- 2. 空白内容的<p></p>也会重叠，没有内容空标签不占空间 -->
<!-- 15px -->
<style>
    p {
       font-size: 16px;
       line-height: 1;
       margin-top: 10px;
       margin-bottom: 15px;
    }
</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```

## 外边距重叠
### 1. 什么是margin重叠
**外边距重叠**是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界

### 2. 相邻重叠(margin-top和margin-bottom)
#### 2.1 外边距重叠 计算盒子距离方式
- margin-top和margin-bottom全部都为正值，取最大者
- margin-top和margin-bottom一正一负，取两者和