import React, { Component } from 'react'

import './index.css'

export default class index extends Component {
  // 3 初始化鼠标状态  未移入
  state = {mouse: false}
  // 3.1 鼠标移动事件处理函数
  handleMouse = (flag)=> {
    return ()=> {
      this.setState({mouse: flag})
    }
  }
  // 4.0 复选框选中、未选中处理函数
  handleChange = (id)=> {
    return (event) => {
      // 把id，done传给App
      // 复选框与input框获取值的区别：event.target.checked   event.target.value
      this.props.updateTodo(id,event.target.checked);
    }
  }

  // 5.0 删除一个todo的回调:这次没有用高阶函数
  handleDelete = (id)=> {
    // 获取id，传给App，删除todo 
    if(window.confirm('确定删除吗')) {
      // 确定删除就把id传过去
      this.props.deleteTodo(id);
    }
  }
  render() {
    // 1.4 接收从List传递过来的数据
    const {id,name,done} = this.props;
    // 3.2 解构鼠标状态
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor: mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            {/* 1.5 复选框的默认状态 defaultChecked虽然好用但后续有bug 
              bug： 点击总计复选框要勾选所有复选框，因为defaultChecked是一次性的，
              所以导致页面无反应，要把defaultChecked改为checked
            */}
            <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
            <span>{name}</span>
          </label>
          <button onClick={()=> {this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
      </li>    
    )
  }
}
