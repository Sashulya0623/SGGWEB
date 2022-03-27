<template>
    <div>
        <!-- 多个容器多个图表 -->
        <div ref="box1" style="width: 600px;height: 400px"></div>
        <div ref="box2" style="width: 600px;height: 400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test2",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            // 第一个容器第一个图表
            const box1 = echarts.init(this.$refs.box1)
            
            box1.setOption({
                title: {
                    text: 'ECharts柱状',
                    subtext: "数据可视化",
                    textStyle: {
                      color: 'cyan'
                    },
                    left: "center"
                },
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

            })

            // 第二个容器第二个图表
            const box2 = echarts.init(this.$refs.box2)

            box2.setOption({
                title: {
                    text: 'ECharts折线',
                    subtext: "数据可视化",
                    textStyle: {
                      color: 'cyan'
                    },
                    left: "center"
                },
                xAxis: {
                data: ['sova1', 'sova2', 'sova3', 'sova4', 'sova5']
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
                  name: '人气',
                  // 图表类型的设置：bar柱状图，line折线图,pie饼状图
                  type: 'line',
                  // 图表的数据
                  data: [5, 20, 36, 10, 10],
                  // color图的颜色
                  color: "tomato"
                }
              ]

            })
        }
    }
}
</script>

<style scoped>

</style>
