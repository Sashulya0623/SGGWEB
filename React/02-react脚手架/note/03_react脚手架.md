## React应用(基于react脚手架)
### 一、创建项目并启动
* 1. 第一步，全局安装：npm i -g create-react-app, 注意必须全局安装
* 2. 第二步，切换到想创项目的目录，使用命令：create-react-app react_staging （项目名）
* 第三步，进入项目文件夹：cd react_staging
* 第四步，启动项目：npm start(推荐用yarn，我已全局安装yarn)
* yarn start 后浏览器自动打开  显示react模板页面
  ![avavtar](./img/第一次创建启动react项目.jpg)
* 默认端口号3000
### 因为是在学习的过程中，所以react_staging中的每一个文件夹都是主要src中代码在项目中运行过，然后放在各自的文件夹中
### 二、脚手架自带文件
* 2.1 文档结构
```js
public ---- 静态资源文件夹
		favicon.ico ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图：适用于不同分辨率的手机
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```
* 重要文件
  index.js ---  App.js ---  index.html
* 初学用不到那么多文件会删一些
### 三、第一个react项目
* 把public和src文件删除自己写
  public/index.html  必须有id为root的容器
  public/favicon.ico
  src/index.js    应用入口
  src/APP.js    组件
* 区分组件js和功能js(2种方法)
  一、大写开头是组件，小写开头是功能js
  二、组件后缀jsx，功能后缀js
* 即便是不同组件中的css中类名最好不要一致，因为类名一致先引入的组件样式会被后引入的组件覆盖，此问题可以被less或者样式模块化解决
  样式模块化：
  	在.css文件中加module   Home.moudle.css
	在.jsx文件中用变量接收引入的css  :
	import hello from './Hello.module.css'
	return <h2 className={hello.title}>hello,first react</h2>
* 代码习惯
  第一种：文件名与文件夹一致
	Hello/Hello.module.css
	Hello/Hello.jsx
	Welcome/Welcome.css
	Welcome/Welcome.jsx
	这种写法在App.js中引入组件：
		import Hello from './components/Hello/Hello'
		import Hello from './components/Welcome/Welcome'
   第二种：文件名都改成index
    Hello/index.module.css
	Hello/index.jsx
    Welcome/index.css
	Welcome/index.jsx
	这种写法在App.js中引入组件：
		import Hello from './components/Hello'
		import Hello from './components/Welcome'
### 四、vscode插件: ES7 React/Redux/GraphQL/React-Native snippets
* 代码片段
* 写出代码片段的缩写vscode会提示想要写的代码，选择回车即可
* 省时省力
* 常用
```js
imr→	import React from 'react'
imrd→	import ReactDOM from 'react-dom'
imrc→	import React, { Component } from 'react'
rcc-> 创建并暴露组件
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

rfc-> 定义并暴露函数
import React from 'react'

export default function $1() {
  return <div>$0</div>
}

```
### 五、功能界面的组件化编码流程（初学通用）
* 1. 拆分组件: 拆分界面,抽取组件
* 2. 实现静态组件: 使用组件实现静态页面效果
* 3. 实现动态组件
	3.1 动态显示初始化数据
		3.1.1 数据类型
		3.1.2 数据名称
		3.1.2 保存在哪个组件?
	3.2 交互(从绑定事件监听开始)
### 六、组件的组合使用-TodoList 
* 功能: 组件化实现此功能
  1. 显示所有todo列表
  2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本
	![avatar](./img/todo_list.gif)
####  一、步骤
##### 1. 静态组件
##### 2. 动态初始化列表
1) 因为header和List都要用到状态数据，暂时不会兄弟组件传递数据，所以把状态state写在父组件App.jsx中
2) 数据存储在todos数组中，数组元素是对象
```jsx
// 1. 状态初始化
state = {
  todos: [
    // done是 任务是否完成的状态
    {id: '001', name: '吃饭', done: true},
    {id: '002', name: '睡觉', done: true},
    {id: '003', name: '打代码', done: false},
  ]
}
```
3) 把初始数据显示在页面上
   App.jsx中存储初始状态todos，并把todos传递给list
   list把具体内容数据传递给
```jsx   App.jsx
// 1.1解构赋值， 把todos传给List显示在页面上
const {todos} = this.state;
return (
  <div className="todo-container">
    <div className="todo-wrap">
       <Header/>
       <List todos = {todos}/>
       <Footer/>
    </div>
  </div>)
```
```jsx    List
// 1.2 任务个数取决于todos的长度，遍历todos
render() {
  const {todos} = this.props;
  return (
    <ul className="todo-main">
      {
        todos.map((todo) => {
          // 1.3 把todo中的任务名称和任务完成状态传递给Item
          // return <Item key ={todo.id} id={todo.id} name={todo.name} done{todo.done}/>
          return <Item key ={todo.id} {...todo} />
        })
      }
    </ul>
  )
}
```
```jsx		Item
render() {
  // 1.4 接收从List传递过来的数据
  const {id,name,done} = this.props;
  return (
    <li>
        <label>
          {/* 1.5 复选框的默认状态 defaultChecked虽然好用但后续有bug */}
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: "none"}}>删除<  button>
    </li>    
  )
}
```
4) 从header输入框中添加单个todo
* 重点： header要把input框的值传给App，App更新数据，再传List---Item
* 子传父：App用props传一个函数给header，header在调用props中该函数传递数据给App
* 借用nanoid库生成唯一编号码，yarn add nanoid
① 首先，header组件中的input绑定键盘弹起事件
```jsx
<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
// handleKeyUp事件
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
```
② App通过props传递数据给header
```jsx
// 用于添加一个todo，接收的参数是对象
addTodo = (todoObj)=> {
  // 先获取原todos
  const {todos} = this.state;
  // 追加一个新的todo，生成新的todos
  const newTodos = [todoObj,...todos];
  // 更新状态
  this.setState({todos: newTodos})
}
```
5) 选项li鼠标移入效果 Item组件
* 鼠标移入时高亮且显示出删除按钮
① 首先初始化鼠标的状态
	state = {mouse: false}
② 然后给每一个li绑定鼠标移入和移出事件
③ 移入移出事件调用相同的事件处理函数handleMouse()
```jsx
<li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}></li>
```
④ 事件处理函数handleMouse()返回的是箭头函数
```jsx
// 3.1 鼠标移动事件处理函数
handleMouse = (flag)=> {
  return ()=> {
    this.setState({mouse: flag})
  }
}
```
⑤ 根据mouse的值改变li样式和button的显示状况
```jsx
// 3.2 解构鼠标状态
const {mouse} = this.state;

<li style={{backgroundColor: mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}></li>

<button className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
```
6) 点击todo，更新state中的todo状态
* 重点在Item把改变的状态传给List，List在传给App，最后App更新后在原路传递回来
① 监听input复选框的状态,把当前复选框的id和done状态传给APP
```jsx
<input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)}/>

// 4.0 复选框选中、未选中处理函数
handleChange = (id)=> {
  return (event) => {
    // 把id，done传给App
    this.props.updateTodo(id,event.target.checked);
  }
}
```
② App更新state,传递给Lit再到Item
```jsx
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

// 传递给List
<List todos = {todos} updateTodo={this.updateTodo}/>

// 传递给Item
const {todos,updateTodo} = this.props;
return <Item key ={todo.id} {...todo} updateTodo={updateTodo} />
```
7) 对props进行限制
① 对header接收的props进行限制
```jsx
// 对接收的props进行:类型、必要性的限制
static propTypes = {
  addTodo: PropTypes.func.isRequired
}
```
② 对List接收的props进行限制
```jsx
// 对接收的props进行:类型、必要性的限制
static propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired
}
```
8) 删除一个todo
① Item绑定点击删除事件,把id传给App
```jsx
<button onClick={()=> {this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>

// 5.0 删除一个todo的回调:这次没有用高阶函数
handleDelete = (id)=> {
  // 获取id，传给App，删除todo 
  if(window.confirm('确定删除吗')) {
    // 确定删除就把id传过去
    this.props.deleteTodo(id);
  }
}
```
② App删除对应id对象，再把更新后数据传给Lit再到item
```jsx
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
// 传给list
<List todos = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>

// 传给Item，并限制props类型
return <Item key ={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}
deleteTodo: PropTypes.func.isRequired
```
9) footer 
① 已完成个数取决于done值，全部个数等于todos的长度，App把todos传给footer
```jsx
// App -- Footer
<Header addTodo={this.addTodo}/>

// Footer接收数据
// 6.0 解构todos
const {todos} = this.props;
// 全部任务个数
const total = todos.length;
// 已完成任务个数
const doneCount = todos.reduce((pre, todo)=> {
  return pre + (todo.done ? 1 : 0);
}, 0);

// 显示数据
<span>已完成{doneCount}</span> / 全部{total}
```
② 当任务框全部勾选，下面的总计复选框要被勾选
> 总计复选框要被勾选：当已完成个数等于总个数时
> 此时用了checked，必须要用onChange事件
> total为0时不用勾选
```jsx
<input type="checkbox"  checked={(doneCount === total) && total !== 0 ? true : false}/>
```
③ 总计复选框作用：当所有任务框没有勾选，点击总计复选框要勾选所有任务项,当所有任务框都已勾选，点击总计复选框要取消勾选所有任务项
> 这里有个bug，前面复选框默认认状态用了defaultChecked
> 这里点击总计复选框，却没有反应，原因是defaultChecked是一次性的，只第一次有效果
> 所以要把原来的defaultChecked改为checked
```jsx
// 监听总计复选框状态变化事件
<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total ? true : false}/>

// 6.1 总复选框的回调
handleCheckAll = (event) => {
  // 把总计复选框的done值传给App
  this.props.checkAll(event.target.checked);
}

// App  --- Footer
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

<Footer todos={todos} checkAll={this.checkAll}/>
```
④ 点击按钮清除所有已完成任务
> 清除所有done值为true的任务
```jsx
// 绑定点击事件
<button onClick={this.handleClearAllDone} className="btn btn-danger" >清除已完成任务</button>

// 点击的回调
// 6.3 清除所有已完成任务
handleClearAllDone = ()=> {
  if(window.confirm('确定删除所有已完成任务吗')) 
  // 调用App的方法
  this.props.clearAllDone();
}

// App方法
// 6.4 用于删除已完成任务,传给footer
clearAllDone = ()=> {
  // 获取原todos
  const {todos} = this.state;
  // 把done值为true的todo对象删除
  const newTodos = todos.filter((todoObj)=> {
    return todoObj.done !== true;
  })
  // 更新数据
  this.setState({todos: newTodos});
}

// 传给Footer
<Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
```
⑤ 对Footer接收的的props进行限制
```jsx
import PropTypes from 'prop-types'
// 对接收的props进行:类型、必要性的限制
static propTypes = {
  todos: PropTypes.array.isRequired,
  checkAll: PropTypes.func.isRequired,
  clearAllDone: PropTypes.func.isRequired
}
```
#### 二、todoList案例相关知识点
1.拆分组件、实现静态组件，注意：className、style的写法
2.动态初始化列表，如何确定将数据放在哪个组件的state中？
	——某个组件使用：放在其自身的state中
	——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
3.关于父子之间通信：
	1.【父组件】给【子组件】传递数据：通过props传递
	2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数，子调用该函数
4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
5.状态在哪里，操作状态的方法就在哪里
