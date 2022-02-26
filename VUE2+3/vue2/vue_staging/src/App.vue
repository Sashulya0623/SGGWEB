<template>
    <div class="wrapper">
        <!-- props传参时，不允许data中接收的变量名和传过来的数据名相同 -->
        <div class="inner">
            <Header  :addTodo="addTodo" />
            <List :todos="this.todos" />
            <Footer />   
        </div>
    </div>
</template>

<script>
import Header from './components/header/Header'
import List from './components/list/List'
import Footer from './components/footer/Footer'
export default {
    name: 'App',
    components:{
        Header,
        List,
        Footer
    },
    data() {
        return {
          //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
          // 任务名数组:包含的是任务对象，任务编号，任务名，任务完成状态
          todos: [
              {id: '001', tname: '写作业', done: false},
              {id: '002', tname: '跑步', done: true},
              {id: '003', tname: '看电影', done: false},
          ]
        }
    },
    methods: {
        //添加一个todo
		addTodo(todoObj){
			this.todos.unshift(todoObj)
		}
    }
}
</script>

<style>
/* base */
* {
    padding: 0;
    margin: 0;
}
.wrapper {
    width: 578px;
    border: 1px solid #DDDDDD;
    padding: 10px;
    margin: 10px auto;
    border-radius: 5px;
    
}

/* 按钮公共样式 */
.wrapper button {
    background-color: #DA4F49;
    color: #fff;
    padding: 5px 15px;
    border-style: none;
    border-radius: 3px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}

.wrapper button:hover {
    background-color: #BD362F;
}

</style>