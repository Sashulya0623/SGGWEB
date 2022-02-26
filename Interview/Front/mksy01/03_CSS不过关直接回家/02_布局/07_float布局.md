# float布局
## 1. 面试题
*如何实现圣杯布局和双飞翼布局*
**圣杯布局和双飞翼布局**
1. 三栏布局，中间一栏最先加载和渲染(中间内容最重要)
2. 两侧内容固定，中间内容随着屏幕宽度自适应
3. 一般用于PC网页

**圣杯布局和双飞翼布局技术总结**
1. 使用float布局
2. 两侧使用margin负值，以便和中间内容横向重叠
3. 防止中间内容被两侧覆盖，一个用padding一个用margin


*手写clearfix*
```css
.clearfix:after {
    content: '';
    display: table;
    clear: both;
}
.clearfix {
    /* 兼容ie低版本 */
    *zoom: 1;
}
```