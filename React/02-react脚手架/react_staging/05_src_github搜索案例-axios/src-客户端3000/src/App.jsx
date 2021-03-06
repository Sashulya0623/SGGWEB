import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
  // 数据初始化
  state = {
    users:[], // users初始值为数组
		isFirst:true, // 是否为第一次打开页面
		isLoading:false,// 标识是否处于加载中
		err:'',// 存储请求相关的错误信息
  }

  // 保存用户数据
  // saveUsers = (users)=> {
  //   this.setState({users})
  // }

  // 保存整个状态数据
  updateAppState = (stateObj)=> {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search  updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
