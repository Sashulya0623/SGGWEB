<template>
    <div>
        <!--
            echarts坐标系：多个坐标系，一个x轴2个y轴
            配置多个y轴，指定使用的y轴索引值
        -->
        <div ref="box1" style="width: 600px;height: 400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test7",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const box1 = echarts.init(this.$refs.box1)


            box1.setOption({
                title: {
                    text: '多个坐标系',
                    left: "left"
                },
                xAxis: {
                    data: ["河西","川东","辰安","南徐"]
                },
                // y轴配置项
                yAxis: [
                    // 有两个y轴配置两次y
                    {
                      // 显示y轴轴线
                      axisLine: {
                        show: true
                      },
                      // 显示y轴刻度
                      axisTick: {
                        show: true
                      }
                    },
                    {
                      // 显示y轴轴线
                      axisLine: {
                        show: true
                      },
                      // 显示y轴刻度
                      axisTick: {
                        show: true
                      }
                    },
                ],
                series: [
                  //   柱状图
                  {
                    type: 'bar',      
                    data:[6,38,20,69],
                    // 指定使用的y轴
                    yAxisIndex: 0
                  },
                  {
                    type: 'line',      
                    data:[10,24,89,66],
                    yAxisIndex: 1
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
