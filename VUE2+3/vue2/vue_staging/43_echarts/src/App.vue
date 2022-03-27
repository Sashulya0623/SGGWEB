<template>
  <div id="app">
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
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  components: {
    Test,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6,
    Test7
  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
