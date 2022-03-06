<template>
  <div id="app">
    <div class="wrapper">
      <Category title="美食">
        <template v-slot:center>
          <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </template>
        <template v-slot:footer>
          <a href="#">更多美食</a>
        </template>
      </Category>
      <Category title="游戏">
        <template v-slot:center>
          <ul>
            <li v-for="(item,index) in games" :key="index">
              {{item}}
            </li>
          </ul>
        </template>
        <template v-slot:footer>
         <div class="foot">
            <a href="#">单机游戏</a>
            <a href="#">网络游戏</a>
          </div>
        </template>
      </Category>
      
      <Category title="电影">
        <template v-slot:center>
          <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </template>
        <template v-slot:footer>
          <div class="foot">
            <a href="#">经典</a>
            <a href="#">热门</a>
            <a href="#">推荐</a>
          </div>
        </template>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: 'App',
  data() {
    return  {
			foods:['火锅','烧烤','小龙虾','牛排'],
			games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  },
  components: {
    Category
  }
}
</script>

<style>

.wrapper, .foot {
  display: flex;
  justify-content: space-around;
}

img, video {
  width: 100%;
}


</style>
