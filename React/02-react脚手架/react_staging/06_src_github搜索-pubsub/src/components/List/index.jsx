import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import Item from '../Item'

export default class List extends Component {
  
  // 数据初始化
  state = {
    users:[], // users初始值为数组
		isFirst:true, // 是否为第一次打开页面
		isLoading:false,// 标识是否处于加载中
		err:'',// 存储请求相关的错误信息
  }


  // 订阅消息，在组件挂载完毕时
  componentDidMount() {
    this.token = PubSub.subscribe('githubUsers',(_,stateObj)=>{
      // 'githubUsers'是自定义消息名
      // 要求传两个参数msg和stateObj，但只想传一个，用_占位
      // stateObj就是接收到的消息
      this.setState(stateObj)
    })
  }

  // 取消订阅,组件即将销毁前
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }


  render() {
    // 解构用户数据,Item的个数取决于users数组长度
    const {users,isFirst,isLoading,err} = this.state;
    return (
        isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
        isLoading ? <h2>Loading......</h2> :
        err ? <h2 style={{color:'red'}}>{err}</h2> :
        <div className="row">
        {
          users.map((userObj) => {
            return <Item key={userObj.id}  userObj={userObj}/>
          })
        }
        </div>
    )
  }
}
