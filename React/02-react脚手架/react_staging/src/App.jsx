// 创建外壳组件App
import React,{Component} from "react"

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法就写在哪
  // 1. 状态初始化
  state = {
    todos: [
      // done是 任务是否完成的状态
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打代码', done: false},
    ]
  }

  // 2.1 传递给header的函数
  // 用于添加一个todo，接收的参数是对象
  addTodo = (todoObj)=> {
    // 先获取原todos
    const {todos} = this.state;
    // 追加一个新的todo，生成新的todos
    const newTodos = [todoObj,...todos];
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 4.1 用于更新todo对象,传给List，再到Item
  updateTodo = (id,done) => {
    // 获取原来的todos
    const {todos} = this.state;
    // 遍历todos，看是否与传进来的id匹配
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) 
      // 更改匹配id的todo的done值
      // return {...todoObj,done: done}; 更改对象中的属性值
      return {...todoObj,done};
      else return todoObj;
    })
    // 更新state
    this.setState({todos: newTodos});
  }

  // 5.1 用于删除todo对象,传给List，再到Item
  deleteTodo = (id) => {
    // 获取原来的todo
    const {todos} = this.state;
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=> {
      return todoObj.id !== id;
    })
    // 更新状态
    this.setState({todos: newTodos});
  }

  // 6.2 用于勾选总计复选框,传给footer
  checkAll = (done)=> {
    // 原来todos
    const {todos} = this.state;
    // 遍历todos，把所有任务done值改为总计复选框的done值
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done};
    })
    // 更新数据
    this.setState({todos: newTodos});
  }

  // 6.4 用于删除已完成任务,传给footer
  clearAllDone = ()=> {
    // 获取原todos
    const {todos} = this.state;
    // 把done值为true的todo对象删除
    const newTodos = todos.filter((todoObj)=> {
      // return !todoObj.done;
      return todoObj.done !== true;
    })
    // 更新数据
    this.setState({todos: newTodos});
  }
  render() {
    // 1.1解构赋值， 把todos传给List显示在页面上
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
           <Header addTodo={this.addTodo}/>
           <List todos = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
           <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
        </div>
      </div>)
  }
}