# BFC
## 1. 面试题
*什么是BFC？如何应用？*
1. Block format context，块级格式化上下文
2. 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素

**形成BFC的条件**
1. float不是none
2. position是absolute或fixed
3. overflow不是visible
4. display是flex、inline-block等

**常见应用**
1. 清除浮动