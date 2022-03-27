<template>
    <div  class="test">
        <!-- 定义有宽度和高度的父容器,盒子要有高度否则不显示 -->
        <!-- <div ref="test" style="width: 600px;height: 400px"></div> -->
        <!-- <div ref="test"></div> -->
        <div ref="test" class="main"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test",
    methods: {
        init() {
           
            // 初始化
            let myCharts = echarts.init(this.$refs.test)
            // let myCharts = echarts.init(this.$refs.test,null, {
            //     width: 600,
            //     height: 400
            // })

            // 图标容器随浏览器页面变化，宽度100%
            // window.onresize = function() {
            //   myCharts.resize();
            // };
            window.onresize = function() {
              myCharts.resize({
                  width: 800,
                  height: 500
              });
            };

            // 绘制图表
            // 指定图表的配置项和数据
            let option = {
              // 图标的标题
              title: {
                // 主标题的设置
                text: 'ECharts 入门示例',
                // 子标题
                subtext: "数据可视化",
                // 主标题的颜色
                textStyle: {
                  color: 'cyan'
                },
                // 设置标题的位置
                left: "center"
              },
              tooltip: {},
              legend: {
                data: ['销量']
              },
              // x轴配置项
              xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              // y轴配置项
              yAxis: {
                // 显示y轴轴线
                axisLine: {
                  show: true
                },
                // 显示y轴刻度
                axisTick: {
                  show: true
                }
              },
              // 系列的设置：绘制什么类型图表、数据的展示
              series: [
                {
                  name: '销量',
                  // 图表类型的设置：bar柱状图，line折线图,pie饼状图
                  type: 'bar',
                  // 图表的数据
                  data: [5, 20, 36, 10, 10, 20],
                  // color图的颜色
                  color: "#bfa"
                }
              ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myCharts.setOption(option)
          }
    },
    mounted() {
        this.init()
    }
}
</script>

<style scoped>
.test {
    width: 100%;
}

.main {
    height: 400px;
}
</style>