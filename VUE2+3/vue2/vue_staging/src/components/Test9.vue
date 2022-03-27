<template>
  <div class="test">
    <div ref="test" class="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Test",
  data() {
      return {
          option: {}
      }
  },
  methods: {
    init() {
      const box1 = echarts.init(this.$refs.test)

      
      this.option = {
        title: {
          text: "企业能耗占比",
          subtext: "下月预计能耗",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}度 (占比{d}%)",
        },
        legend: {
        //   orient: "vertical",
        //   left: "left",
        },
        series: [
          {
            name: "下月预计能耗(度)",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      }

      box1.setOption(this.option)
    },
  },
  mounted() {
    this.init();
  },
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