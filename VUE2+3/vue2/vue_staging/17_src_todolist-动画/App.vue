<template>
  <div id="app">
    <div class="todo_container">
      <div class="todo_wrapper">
        <Header :todos='todos' @addTodo='addTodo'/>
        <!-- <List :todos='todos' :checkTodo='checkTodo' :deleteTodo='deleteTodo'/> -->
        <List :todos='todos'/>
        <Footer :todos='todos' @checkAllTodo='checkAllTodo'  @clearAllDone='clearAllDone'/>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import Header from './components/header/Header'
import List from './components/list/List'
import Footer from './components/footer/Footer'


export default {
  name: 'App',
  data() {
    return {
      // 任务集合
      // todos: [
      //   {id: '001', tname: '旅游', done: false},
      //   {id: '002', tname: '看电影', done: true},
      //   {id: '003', tname: '学习', done: false},
      // ],

      // 2. 再从浏览器本地储存中获取数据
      // 如果没有任务，todos设置为空，防止底部统计报错
      todos : JSON.parse(localStorage.getItem('todos')) || []

    }
  },
  components: {
    Header,
    List,
    Footer

  },
  methods: {
    // 添加任务方法
    addTodo(todoObj) {
          this.todos.unshift(todoObj)
    },

    // 勾选or取消勾选一个todoObj
    checkTodo(id) {
      this.todos.forEach((todoObj) => {
        if(todoObj.id === id)
        todoObj.done = !todoObj.done
      })
    },

    // 删除任务对象
    deleteTodo(id) {
      this.todos = this.todos.filter((todoObj) => {
        return todoObj.id !== id
      })
    }, 

    // 更新任务对象
    updateTodo(id, tname) {
      this.todos.forEach((todoObj) => {
        if(todoObj.id === id) {
          todoObj.tname = tname
        }
      })
    },

    // 全选按钮
    checkAllTodo(done) { // 把全选按钮的状态传给每个todoObj
      this.todos.forEach((todoObj) => {
        todoObj.done = done
      })
    },

    // 删除所有已完成任务
    clearAllDone() {
      this.todos = this.todos.filter((todoObj) => {
        return todoObj.done !== true
      })
    }
    
  },
  watch: {
    // 监听todos的变化
    todos: {
      // 开启深度监听，可以记录复选框的变化，若果不开启，只能监听到任务对象的添加
      deep: true,
      handler(newValue) {
        // 1. 先把新数据只保存在浏览器本地缓存中
        localStorage.setItem('todos', JSON.stringify(newValue))
      }
    }
  },

  // 事件总线更改处
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)

    // 更新任务
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
    this.$bus.$off('updateTodo')
  }
}
</script>

<style>
/* base */
* {
  margin: 0;
  padding: 0;
}

.todo_container {
  width: 578px;
  border: 1px solid #DDDDDD;
  padding: 10px;
  margin: 10px auto;
  border-radius: 5px;
}

/* 按钮公共样式 */
.todo_container button {
    background-color: #DA4F49;
    color: #fff;
    padding: 5px 15px;
    border-style: none;
    outline: none;
    border-radius: 3px;
  
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;


}
.todo_container button:hover {
    background-color: #BD362F;
}

</style>
