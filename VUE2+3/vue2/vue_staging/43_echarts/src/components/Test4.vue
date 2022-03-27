<template>
    <div>
        <!-- 数据集dataset使用 
            数据集：一个二维数组，把数据放在里面
        -->
        <div ref="box1" style="width: 600px;height: 400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test4",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const box1 = echarts.init(this.$refs.box1)

            // 数据集
            const data = [
                ["sova1",5,12,'x',10],
                ["sova2",12,23,'y',20],
                ["sova3",20,32,'a',30],
                ["sova4",30,21,'b',40],
                ["sova5",48,48,'c',50]
            ]

            box1.setOption({
                // 设置数据集
                dataset: {
                    // 数据源
                    source: data
                },
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
                    // data: [5, 20, 36, 10, 10],
                    color: "tomato",
                    encode: {
                        // 指定y轴数据为数据集中索引值为2的数据
                        y: 2
                    }
                  },
                  //   柱状图
                  {
                    type: 'bar',
                    // data: [5, 20, 36, 10, 10],
                    color: "#bfa",
                    encode: {
                        // 指定y轴数据
                        y: 1
                    }
                  },
                  //   饼图
                  {
                    type: 'pie',
                    // 饼图可以显示文字: 有文字显示不全的问题
                    // data: [
                    //     {
                    //         name: 'sova1',
                    //         value: 5
                    //     },
                    //     {
                    //         name: 'sova2',
                    //         value: 20
                    //     },
                    //     {
                    //         name: 'sova3',
                    //         value: 36
                    //     },
                    //     {
                    //         name: 'sova4',
                    //         value: 10
                    //     },
                    //     {
                    //         name: 'sova5',
                    //         value: 10
                    //     },
                    // ],
                    // 设置饼图的宽高
                    width: 150,
                    height: 150,
                    // 饼图的位置
                    left: 100,
                    top: 80,
                    // 饼图的半径
                    radius: 25,
                    // radius: ['30%', '50%']
                    encode: {
                        // 指定饼图名称
                        itemName: 3, // 数据集索引值3
                        value: 4 // 数据集索引值4
                    }
                  },
                ]

            })
        }
    }
}
</script>