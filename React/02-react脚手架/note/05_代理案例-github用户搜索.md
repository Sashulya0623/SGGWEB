整个state传递：{...this.state}
整个state修改状态：updateAppState


# github用户搜索 - axios
get请求
请求地址： https://api.github.com/search/users?q=xxxxxx
xxxxxx是输入的关键词

* 配置代理
> 3000可以直接向github发送请求这是因为github配置了cors解决跨域问题
> 本案例仍然假设存在跨域问题
> 把中间站点设置在服务器5000，由5000向github请求数据
> 以防请求频繁请求不到数据，在本地模拟了一些数据备用

## 静态组件
1. search块使用了bootstrap中的巨幕，栅格布局

## 动态数据
### 一、关键词搜索发起网络请求获取用户数据保存在state中
重点：保存数据的方法定义在App，传给Search，子调用方法保存数据
```jsx
<div>
  <input ref={(c)=>{this.inputKeyWord = c}} type="text" placehold='请输入关键词进行搜索'/>&nbsp;<button onClick={this.getUserData}>搜索</button>
</div>
// 点击搜索的回调
getUserData = ()=> {
  // 获取输入框的值(连续解构赋值+重命名)
  const {inputKeyWord:{value: keyword}} = this
  // 发起网络请求(axios)
  axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`)
  .then(
      // 请求成功把数据保存在users中
      response => {
        this.props.saveUsers(response.data.items)
      },
      error => {console.log("失败了",error);}
  )
}
```
### 二、展示数据在页面中
```jsx
// List
return (
    <div className="row">
    {
      users.map((userObj) => {
        return <Item key={userObj.id}  userObj={userObj}/>
      })
    }
    </div>
)
// Item
render() {
 const {userObj} = this.props;
 return (
     <div className="card">
         <a href={userObj.html_url} target="_blank" rel="noreferrer">
           <img alt='profile' src={userObj.avatar_url} style={{width: '100px'}}/>
         </a>
         <p className="card-text">{userObj.login}</p>
     </div>
 )
}
```
### 三、增强用户体验
1. 第一次进入页面，是欢迎界面   isFirst
2. 点击搜索按钮，数据未返回之前显示正在加载中 isLoading
3. 数据返回后，显示用户数据，取消正在加载中的显示
4. 有错误，页面显示错误 err
5. 以上显示在List组件中

#### 1. 由于点击前后多个数据状态变化，所以一开始的saveUsers方法不能满足要求
* 要定义方法，保存整个状态
```jsx
state = {
    users:[], // users初始值为数组
	isFirst:true, // 是否为第一次打开页面
	isLoading:false,// 标识是否处于加载中
	err:'',// 存储请求相关的错误信息
}
```
* 更新整个状态的方法
```jsx
// 保存整个状态数据
updateAppState = (stateObj)=> {
  this.setState(stateObj);
}
```
* 把更新方法传给Search，把整个state传给List 显示在页面上
```jsx
<Search  updateAppState={this.updateAppState} />
<List {...this.state} />
```
* 搜索回调，保存state
```jsx
// 点击搜索的回调
getUserData = ()=> {
  // 获取输入框的值(连续解构赋值+重命名)
  const {inputKeyWord:{value: keyword}} = this
  // 请求成功前，发送请求前通知App更新状态，isFirst和isLoading
  this.props.updateAppState({isFirst: false, isLoading: true})
  // 发起网络请求(axios)
  axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`)
  .then(
      // 请求成功后，发送请求前通知App更新状态isLoading，保存users
      response => {
        this.props.updateAppState({isLoading: false, users: response.data.items})
      },
      // 请求错误 展示错误
      // 注意这里不要直接存储err，而是错误信息
      error => {
        this.props.updateAppState({isLoading:false,err:error.message})
      }
  )
}
```
* 根据状态，判断List显示内容
```jsx
render() {
  // 解构用户数据,Item的个数取决于users数组长度
  const {users,isFirst,isLoading,err} = this.props;
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
```

# github搜索--消息订阅-发布机制
> 上面的案例组件传递数据只能父子相传，兄弟组件不能直接传递，必须通过父组件App通转，非常麻烦
> 消息订阅-发布机制可以实现任意组件传递数据，本案例实现兄弟组件传递数据
> 有许多工具库，本案例使用PubSubJS
## PubSubJS使用
1. 下载：   yarn add pubsub-js
2. 使用： import PubSub from 'pubsub-js'
3. 在接收信息的组件定义消息名
1) 在接收消息组件的ComponentDidMount生命周期函数中定义
```jsx
this.token = PubSub.subscribe('自定义消息名',(_,data)=>{
    // 要求传两个参数msg和data，但只想传一个，用_占位
    //data就是接收到的消息 ,消息通过 PubSub.publish('消息名',数据)发送
})
```
2) 在接收消息组件的ComponentWillUnmount生命周期定义
```jsx
PubSub.unsubscribe(this.token)
```
4. 在发送组件定义发送
```jsx
PubSub.publish('消息名',data);
```

## 改代码
**Search发送消息，List接收消息**
### 1. state不写在App中，写在List(用的state数据多)中
### 2. List订阅消息，Search发送消息，消息名保持一致
```jsx   List.jsx
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

// List直接从自己的state取数据
const {users,isFirst,isLoading,err} = this.state;
```
```jsx
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
        PubSub.publish('githubUsers',{isLoading: false, users: responsedata.items})
      },
      // 请求错误 展示错误
      // 注意这里不要直接存储err，而是错误信息
      error => {
        PubSub.publish('githubUsers',{isLoading:false,err:error.message})
      }
  )
}
```

# github搜索--fetch
由于promise基础不好，先跳过这一讲

**fetch**
- 不用使用XHR发送请求
- 不用下载，windows系统自带fetch
- 07_src_github搜索-fetch

# github搜索案例相关知识点
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2.ES6小知识点：解构赋值+重命名
			let obj = {a:{b:1}}
			const {a} = obj; //传统解构赋值
			const {a:{b}} = obj; //连续解构赋值
			const {a:{b:value}} = obj; //连续解构赋值+重命名
3.消息订阅与发布机制
			1.先订阅，再发布（理解：有一种隔空对话的感觉）
			2.适用于任意组件间通信
			3.要在组件的componentWillUnmount中取消订阅
4.fetch发送请求（关注分离的设计思想）
			try {
				const response= await fetch(`/api1/search/users2?q=${keyWor`)
				const data = await response.json()
				console.log(data);
			} catch (error) {
				console.log('请求出错',error);
			}