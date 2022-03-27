<template>
    <div>
        <!--
            echarts坐标系：一个坐标系，一个x轴一个y轴
        -->
        <div ref="box1" style="width: 600px;height: 400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test6",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const box1 = echarts.init(this.$refs.box1)


            box1.setOption({
                title: {
                    text: '一个坐标系',
                    left: "left"
                },
                xAxis: {
                    // 点分的太散:type: 'category'看起来均匀写
                    type: 'category'
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
                  //   散点图
                  {
                    type: 'scatter',
                    // 散点图数据
                    data: [
                        [10,20],
                        [13,66],
                        [20,35],
                        [38,55],
                        [60,99]
                    ]
                  }
                ],
                // 提示组件
                tooltip: {
                  // 提示框文字颜色
                  textStyle: {
                    color: "red"
                  }
                }
            })
        }
    }
}
</script>
