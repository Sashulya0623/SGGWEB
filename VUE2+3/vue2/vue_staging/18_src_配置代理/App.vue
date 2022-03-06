<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>  
    <br>
    <button @click="getCars">获取汽车信息</button>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {},
  methods: {
    getStudents() {
        // 1. 发起网络请求
        // axios.get('http://localhost:5000/students').then(
        //     response => {
        //         console.log("请求成功", response.data);
        //     },
        //     error => {
        //         console.log("请求失败", error.message);
        //     }

        // )

        // 2. 单个代理：配置代理后的请求路径是中介服务器的端口8080
        // axios.get('http://localhost:8080/students').then(
        //     response => {
        //         console.log('成功了',response.data);
        //     },
        //     error => {
        //         console.log('失败了',error);
        //     }
        // )

        // 3. 多个代理
        axios.get('http://localhost:8080/apid/students').then(
            response => {
                console.log('成功了',response.data);
            },
            error => {
                console.log('失败了',error);
            }
        )
    },

    getCars() {
        // 配置代理后的请求路径是中介服务器的端口8080
        axios.get('http://localhost:8080/apic/cars').then(
            response => {
                console.log('成功了',response.data);
            },
            error => {
                console.log('失败了',error);
            }
        )
    }
  }
  

  
}
</script>

<style>
/* base */
* {
  margin: 0;
  padding: 0;
}


</style>
