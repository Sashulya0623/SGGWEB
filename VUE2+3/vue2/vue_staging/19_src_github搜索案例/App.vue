<template>
  <div id="app">
    <div class="container">
          <Search />
          <List />
        
    </div>  
  </div>
</template>

<script>


import Search from './components/Search/Search'
import List from './components/List/List'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Search,
    List
  },
  methods: {
   
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
