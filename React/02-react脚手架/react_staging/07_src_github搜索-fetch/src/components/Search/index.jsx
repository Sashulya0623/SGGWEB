import React, { Component } from 'react';
import PubSub from 'pubsub-js'

export default class Search extends Component {

  // 点击搜索的回调
  getUserData = async()=> {
    // 获取输入框的值(连续解构赋值+重命名)
    const {inputKeyWord:{value: keyword}} = this
    // 请求成功前，发送请求前通知List更新状态，isFirst和isLoading
    PubSub.publish('githubUsers',{isFirst: false, isLoading: true});

    //发送网络请求---使用fetch发送（未优化）
		/* fetch(`/api1/search/users2?q=${keyword}`).then(
			response => {
				console.log('联系服务器成功了');
				return response.json()
			},
			error => {
				console.log('联系服务器失败了',error);
				return new Promise(()=>{})
			}
		).then(
			response => {console.log('获取数据成功了',response);},
			error => {console.log('获取数据失败了',error);}
		) */

    //发送网络请求---使用fetch发送（优化）
		try {
			const response= await fetch(`/api1/search/users?q=${keyword}`)
			const data = await response.json()
			console.log(data);
			PubSub.publish('githubUsers',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error);
			PubSub.publish('githubUsers',{isLoading:false,err:error.message})
		}
   
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
