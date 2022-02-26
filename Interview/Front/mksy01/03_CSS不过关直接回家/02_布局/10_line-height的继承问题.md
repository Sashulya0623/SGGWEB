# 图文样式
## 1. 面试题
**line-height的继承问题**
*line-height如何继承*
```html
<!-- 如下代码，p标签的行高将会是多少   40-->
<style>
    body {
        font-size: 20px;
        line-height: 200%;
    }
    p {
        font-size: 16px;
    }
</style>
<body>
    <p>AAA</p>
</body>
```

## 2. 计算line-height
1. line-height有具体像素值，如30px，则直接继承该值
2. line-height写比例，如1.5，则元素的行高 = (比例)1.5 * 元素的font-size
3. line-height写百分比，如200%，元素的行高 = body的font-size * (百分比)200%