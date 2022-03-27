<template>
    <div>
        <!--
            echarts内置组件:dataZoom,legend, tooltip,grid
        -->
        <div ref="box1" style="width: 600px;height: 400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test5",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const box1 = echarts.init(this.$refs.box1)

            // 数据集
            const data = [
                ["sova1",5,12],
                ["sova2",12,28],
                ["sova3",20,9],
                ["sova4",30,35],
                ["sova5",48,49]
            ]

            box1.setOption({
                 dataset: {
                    // 数据源
                    source: data
                },
                title: {
                    text: 'ECharts',
                    subtext: "数据可视化",
                    textStyle: {
                      color: 'cyan'
                    },
                    left: "left"
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
                series: [
                  // 折线图
                  {
                    name: '折线图',
                    type: 'line',
                    color: "tomato",
                    encode: {
                        y: 2
                    }
                  },
                  //   柱状图
                  {
                    name: '柱状图',
                    type: 'bar',
                    color: "#bfa",
                    encode: {
                        y: 1
                    }
                  }
                ],
                // 提示组件
                tooltip: {
                  // 提示框文字颜色
                  textStyle: {
                    color: "red"
                  }
                },
                // 系列切换，选择图形类型：给两个图name属性
                legend: {
                  data: ["柱状图","折线图"]
                },
                // 工具栏：缩放、数据等
                toolbox: {
                  show: true,
                  feature: {
                    dataZoom: {
                      yAxisIndex: "none"
                    },
                    dataView: {
                      readOnly: false
                    },
                    magicType: {
                      type: ["line", "bar"]
                    },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                // 观看某一区域
                dataZoom: {},
                // 图标布局
                grid: {
                  left: 30,
                  right: 0
                }

            })
        }
    }
}
</script>
