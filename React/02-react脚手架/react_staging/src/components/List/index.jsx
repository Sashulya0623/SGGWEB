import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Item from '../Item'
import './index.css'

export default class index extends Component {
  // 对接收的props进行:类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  // 1.2 任务个数取决于todos的长度，遍历todos
  render() {
    const {todos,updateTodo,deleteTodo} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            // 1.3 把todo中的任务名称和任务完成状态传递给Item
            // return <Item key ={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
            return <Item key ={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
