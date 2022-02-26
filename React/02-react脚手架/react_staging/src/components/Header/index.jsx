import React, { Component } from 'react'
// nanoid库和uuid库一样都可以生成uuid，但是nanoid相比uuid要更轻量级
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class index extends Component {
    // 对接收的props进行:类型、必要性的限制
    static propTypes = {
      addTodo: PropTypes.func.isRequired
    }

    // 2. 获取input值并回车确定传给父组件App，父组件更新数据并传递给List再到Item
    handleKeyUp =(event)=> {
        // 获取input值，因为事件绑定对象和调用对象一致，用event.target获取值
        // 解构赋值获取keyCode，target
        const {keyCode,target} = event;
        // 判断 按回车键 输出值
        if(keyCode !== 13) return;
        // 输入不能为空
        if(target.value.trim() === ''){
            alert('输入不能为空！');
            return;
        }
        // 准备好一个todo对象
        const todoObj = {id: nanoid(), name: target.value, done: false};
        // 将todoObj传递给父组件App
        this.props.addTodo(todoObj);
        // 清空输入
        target.value = '';
    }
    render() {
        
        
        return (
          <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
      )
    }
}
