<template>
  <div id="app">
    <div class="wrapper">
      <Category title="游戏">
        <template v-slot:center="slotProps">
          <ul>
            <li v-for="(item,index) in slotProps.games" :key="index">
              {{item}}
            </li>
          </ul>
        </template>
      </Category>
      <Category title="游戏">
        <template v-slot:center="slotProps">
          <ol>
            <li v-for="(item,index) in slotProps.games" :key="index">
              {{item}}
            </li>
          </ol>
        </template>
      </Category>
      <Category title="游戏">
        <template v-slot:center="slotProps">
            <h4 v-for="(item,index) in slotProps.games" :key="index">
              {{item}}
            </h4>
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
			
    }
  },
  components: {
    Category
  }
}
</script>

<style>

.wrapper {
  display: flex;
  justify-content: space-around;
}

h4 {
  margin-left: 30px;
}


</style>
