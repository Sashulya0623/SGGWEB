import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  // 点击搜索的回调
  getUserData = ()=> {
    // 获取输入框的值(连续解构赋值+重命名)
    const {inputKeyWord:{value: keyword}} = this
    // 请求成功前，发送请求前通知List更新状态，isFirst和isLoading
    PubSub.publish('githubUsers',{isFirst: false, isLoading: true});
    // 发起网络请求(axios)
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`)
    .then(
        // 请求成功后，发送请求前通知List更新状态isLoading，保存users
        response => {
          PubSub.publish('githubUsers',{isLoading: false, users: response.data.items})
        },
        // 请求错误 展示错误
        // 注意这里不要直接存储err，而是错误信息
        error => {
          PubSub.publish('githubUsers',{isLoading:false,err:error.message})
        }
    )
  }
  render() {
    return (
        <section className='jumbotron'>
          <h3>搜索github用户</h3>
          <div>
            <input ref={(c)=>{this.inputKeyWord = c}} type="text" placeholder='请输入关键词进行搜索'/>
            &nbsp;<button onClick={this.getUserData}>搜索</button>
          </div>
        </section>
    )
  }
}
