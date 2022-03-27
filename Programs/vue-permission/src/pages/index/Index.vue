<template>
  <div class="wrapper">
   <Header />
   <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
export default {
  name: 'Index',
  components: {
    Header
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: inherit;
}
</style>

