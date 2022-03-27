<template>
    <div  class="test">
    <div class="search-input">
      <span>日期</span>
      <el-select  placeholder="请选择区域" clearable>
        <el-option v-for="item in areaDate" :key="item.id" :label="item.areaName" :value="item.id"></el-option>
      </el-select>
    </div>
    </div>
</template>

<script>
import * as echarts from 'echarts' 
export default {
    name: "Test8",
    
}
</script>

<style scoped>

</style>