<template>
  <div id="app">
    <!-- 需求：student把学生姓名传递给school
     -->
    <div class="father">   
      <h2>库伊拉</h2>
      <School/>    
      <Student/> 
    </div>
  </div>
</template>

<script>
import School from './components/school/School'
import Student from './components/student/Student'

export default {
  name: 'App',
  data() {
    return {
     

    }
  },
  components: {
    School,
    Student
  },
  methods: {
    
    
  },
  mounted() {
    
  }
  
}
</script>

<style>
.father {
  background-color: gray;
}
</style>
