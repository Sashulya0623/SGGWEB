<template>
    <div>
        <!-- 一个容器多个图表： series配置项 -->
        <div ref="box1" style="width: 600px;height: 400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test3",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const box1 = echarts.init(this.$refs.box1)

            box1.setOption({
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
                  // 折线图
                  {
                    type: 'line',
                    data: [5, 20, 36, 10, 10],
                    color: "tomato"
                  },
                  //   柱状图
                  {
                    type: 'bar',
                    data: [5, 20, 36, 10, 10],
                    color: "#bfa"
                  },
                  //   饼图
                  {
                    type: 'pie',
                    // 饼图可以显示文字: 文字显示不全把饼图width调大
                    data: [
                        {
                            name: 'sova1',
                            value: 5
                        },
                        {
                            name: 'sova2',
                            value: 20
                        },
                        {
                            name: 'sova3',
                            value: 36
                        },
                        {
                            name: 'sova4',
                            value: 10
                        },
                        {
                            name: 'sova5',
                            value: 10
                        },
                    ],
                    // 设置饼图的宽高
                    width: 250,
                    height: 150,
                    // 饼图的位置
                    left: 400,
                    top: 80,
                    // 饼图的半径
                    radius: 25
                    // radius: ['30%', '50%']
                  },
                ]

            })
        }
    }
}
</script>