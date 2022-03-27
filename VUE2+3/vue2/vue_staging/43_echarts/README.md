### echarts

#### 1. 安装
* 注意：vue使用echarts获取容器时要使用ref
1) npm install echarts --save
2) 完全引入
```js
import * as echarts from 'echarts';
```
3) 图表初始化
*  1. 定义有宽度和高度的父容器(推荐)
```html
<!-- 使用这种方法在调用 echarts.init 时需保证容器已经有宽度和高度了  -->
<div ref="test" style="width: 600px;height: 400px"></div>
```
* 2.  指定图表的大小
```js
let myCharts = echarts.init(this.$refs.test,null, {
    width: 600,
    height: 400
})
```
* 3. 监听图表容器的大小并改变图表大小
```html
<div  class="test">
    <div ref="test" class="main"></div>
</div>
<script>
    let myCharts = echarts.init(this.$refs.test)
    // 图标容器随浏览器页面变化，宽度100%
    window.onresize = function() {
      myCharts.resize();
    };
    // 指定宽度和高度，实现图表大小不等于容器大小的效果
    window.onresize = function() {
      myCharts.resize({
          width: 800,
          height: 500
      });
    };
</script>
<style scoped>
.test {
    width: 100%;
}

.main {
    height: 400px;
}
</style>
```
