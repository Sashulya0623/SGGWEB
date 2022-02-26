import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class index extends Component {
  // 对接收的props进行:类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkAll: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }

    // 6.1 总复选框的回调
    handleCheckAll = (event) => {
      // 把总计复选框的done值传给App
      // event.target.checked是总复选框的done状态
      this.props.checkAll(event.target.checked);
    }

    // 6.3 清除所有已完成任务
    handleClearAllDone = ()=> {
      if(window.confirm('确定删除所有已完成任务吗')) 
      // 调用App的方法
      this.props.clearAllDone();
    }
    render() {
        // 6.0 解构todos
        const {todos} = this.props;
        // 全部任务个数
        const total = todos.length;
        // 已完成任务个数
        const doneCount = todos.reduce((pre, todo)=> {
          // pre是第一次传进来的数据，设置为了0
          // 当前传进来的是todo单个任务对象
          // 如果done值为true数据加1
          // 返回的是已完成的个数
          return pre + (todo.done ? 1 : 0);
        }, 0);
        return (
          <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.handleCheckAll} checked={(doneCount === total) && total !== 0 ? true : false}/>
            </label>
            <span>
              <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger" >清除已完成任务</button>
          </div>
        )
    }
}
