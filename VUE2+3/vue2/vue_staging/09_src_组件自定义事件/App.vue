<template>
  <div id="app">
    <!-- 需求：子组件把学校名称和学生名称传给父组件
        分别用props和组件自定义事件传递
     -->
    <div class="father">
      <h1>库伊拉，学生名称：{{studentName}}</h1>
      <!-- props -->
      <School :getSchoolName="getSchoolName"/>

      <!-- 绑定组件自定义事件
        首先在父组件中给子组件定义事件,然后在子组件中触发事件
          子组件触发自定义事件，传递数据给自定义事件的回调函数
          第一种： 直接在组件标签中绑定  <Student @student-name="getStudentName" />
          第二种： ref属性，组件挂载完毕时绑定,this.$refs.student.$on('student-name', this.getStudentName)
       -->

       <!-- 第一种绑定自定义事件的方法 -->
      <!-- <Student @student-name="getStudentName" @demo="handleDemo"/> -->

      <!-- 第二种：ref，更灵活 -->
      <Student ref="student"  @click.native="show"/>

      <!-- 如果想自定义的事件只被触发一次，添加once修饰符 -->
      <!-- <Student @student-name.once="getStudentName" /> -->
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
      studentName: ''

    }
  },
  components: {
    School,
    Student
  },
  methods: {
    // 获取学校名称
    getSchoolName(sname) {
      console.log("获取到学校名称", sname);
    },

    // 获取学生名称
    // getStudentName(sname, ...params) {
    //   // ...params把传递的参数整成一个数组的形式
    //   console.log("获取到学生名称", sname, params);
    //   this.studentName = sname
    // },

    handleDemo() {
      console.log("demo被调用");
    },

    show() {
      alert('原生事件')
    }
    
  },
  mounted() {
    // this.$refs.student.$on('student-name', this.getStudentName)
    this.$refs.student.$on('student-name',(sname,...params)=> {
      console.log("获取到学生名称", sname, params);
      this.studentName = sname
    })
  }
  
}
</script>

<style>
.father {
  background-color: gray;
}
</style>
