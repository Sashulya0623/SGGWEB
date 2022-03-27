<template>
  <div id="app">
    <div v-if="show">
      <h1>{{count}}</h1>
      <button @click="count++">+</button>
      <button @click="count--">-</button>
      <Test v-show="count === 1"/>
      <Test2 />
      <Test3 />
      <Test4 />
      <Test5 />
      <Test6 />
      <Test7 />
      <Test8 />
    </div>
   
    <div v-if="!show">
      <Test9 />
    </div>
    
  </div>
</template>

<script>
import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'
import Test5 from './components/Test5'
import Test6 from './components/Test6'
import Test7 from './components/Test7'
import Test8 from './components/Test8'
import Test9 from './components/Test9'
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      show: false
    }
  },
  components: {
    Test,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6,
    Test7,
    Test8,
    Test9,
  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
