<template>
  <div id="app"> 
    <Count />
    <Person />
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person.vue'

export default {
  name: 'App',
  data() {
    return {
     

    }
  },
  components: {
    Count,
    Person
  }
}
</script>

<style>

</style>
