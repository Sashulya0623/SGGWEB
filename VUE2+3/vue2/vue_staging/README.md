# vue_staging

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# vue脚手架
- Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）
- 最新的版本是 4.x

## 一、 @vue/cli  4.x使用
* 第一步（仅第一次执行）：全局安装@vue/cli
   npm install -g @vue/cli   可以指定版本，我已安装v4.5.13
* 第二步：切换到你要创建项目的目录，然后使用命令创建项目
    vue create 项目名
* 第三步：启动项目
    npm run serve
    
* vue版本选择default(vue2,babel,eslint)

* 创建项目报错：Failed to get response from https://registry.npm.taobao.org/binary-mirror-config
    执行命令：npm config set strict-ssl false

* 升级全局的 Vue CLI 包，请运行： npm update -g @vue/cli
  我已升级到v4.5.15

### 脚手架文件结构

	├── node_modules 
	├── public
	│   ├── favicon.ico: 页签图标
	│   └── index.html: 主页面
	├── src
	│   ├── assets: 存放静态资源
	│   │   └── logo.png
	│   │── component: 存放组件
	│   │   └── HelloWorld.vue
	│   │── App.vue: 汇总所有组件
	│   │── main.js: 入口文件
	├── .gitignore: git版本管制忽略的配置
	├── babel.config.js: babel的配置文件
	├── package.json: 应用包配置文件 
	├── README.md: 应用描述文件
	├── package-lock.json：包版本控制文件

文件执行顺序： main.js -- 引入组件   --- 渲染到容器(index.html)

### 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别：
    1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
    2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

### vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh
3. vue.config.js自己创建，设置配置项后脚手架会把它和默认的配置合并并覆盖原来的配置，从而起效果
```js
//  vue.config.js
module.exports = {
    pages: {
      index: {
        // 入口
        entry: 'src/main.js',
      },
    },
    lintOnSave:false, // 关闭语法检查
}
```

## 二、 ref属性
1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
    1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
    2. 使用获取：```this.$refs.xxx```

## 三、 props配置项

1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

    1. 第一种方式（只接收）：```props:['name'] ```

    2. 第二种方式（限制类型）：```props:{name:String}```

    3. 第三种方式（限制类型、限制必要性、指定默认值）：

        ```js
        props:{
        	name:{
        	  type:String, // 类型
        	  required:true, // 必要性
        	  default:'老王' // 默认值
        	}
        }
        ```

 > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据
4. 子组件修改接收的属性值
  在data中定义变量接收传进来的属性值，在进行修改data变量的操作
  ```myAge: this.age```

## 四、 mixin(混入)

1. 功能：可以把多个组件共用的配置(方法数据等)提取成一个混入对象

2. 使用方式：

    第一步定义混合：

    ```js
    // 创建并暴露mixin对象
    export const mixin = { // mixin是定义的对象名
        methods: {
            showName() {
                alert(this.name)
            }
        },
        mounted() {
            console.log("挂载了")
        }
    }

    export const mixin2 = {
        data() {
            return {
                x: 100,
                y: 200
            }
        }
    }
    ```

    第二步使用混入：

    ​	全局混入：在main.js中
    ```js
    // 1. 全局引入混入
    import {mixin,mixin2} from './mixin'
    // 2. 全部使用混入
    Vue.mixin(mixin)
    Vue.mixin(mixin2)
    ```
    ​	局部混入：在要使用配置的组件中
    ```js
    // 1. 局部引入混合文件
    import {mixin,mixin2} from '../mixin'
    // 2. 使用混入
    mixins: [mixin,mixin2]
    ```

## 五、 插件
新建plugin.js，把功能写在里面，vue脚手架会自己整合调用该配置

1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue(构造函数)，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

    ```js
    export default {
      install(Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入(合)
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
      }
    }
    ```

4. 使用插件：在main.js中
```js
// 1. 引入插件
import plugins from './plugins'

// 2. 应用（使用）插件
Vue.use(plugins,1,2,3)
```

## 六、scoped样式

1. 作用：让样式在局部生效，防止冲突
2. 写法：```<style scoped>```
3. App父组件最好不要用，因为一般是公共样式
4. less需要less-loader插件支持，注意不要使用最新版，不太稳定，要看vue的版本支持情况

## 安装less支持
npm install less less-loader@6.2.0 --save-dev 
## 一、 todolist
### 1. header 回车添加任务
* 主要是现在父组件App中定义添加任务对象的方法，然后再子组件header中调用该方法
* 从而实现数据子传父
### 2. Item 任务状态的勾选
* 同样父子传递数据
* App： checkTodo   Item： handleCheck
* 通过任务id
### 3. Item 删除任务
* 同2中方法
### 4. Footer 底部统计
* 未完成，已完成，用计算属性
* 全选按钮
    isAll： 当已完成=全部，按钮被选中
    当input触发change事件，调用回调函数(调用的父组件checkAllTodo方法)改变checked状态
### 4. 底部优化
* 若没有任务，底部不显示，v-show

## 二、 todolist-本地存储
* 任务的添加、任务状态的更改都保存在本都存储中，不会随着页面刷新而丢失

* todos默认 todos : JSON.parse(localStorage.getItem('todos')) || []
* 如果浏览器有缓存，从缓存中获取，没有则为空数组

* 开启深度侦听，监听todos的变化，把新数据保存在本地存储中，在传给todos

## 三、 组件自定义事件
* 适用于：子组件----》父组件
* A父组件，B子组件，B传递数据给A，要在A中给B绑定自定义事件(事件的回调在A中)

### 1. 绑定事件
* 数据传递： 子组件把数据传给父组件中自定义事件的回调函数
1) 第一种绑定： 直接在父组件给子组件标签中绑定
   <Student @student-name="getStudentName" />  或 <Student v-on:student-name="getStudentName" />
   然后在子组件中发送事件并传递参数
   this.$emit("student-name",this.sname,12,34,66)

2) 第二种绑定： 给组件标签一个ref属性
   <Student ref="student" />
   在组件挂载完毕后(mounted)，通过ref绑定事件
   this.$refs.student.$on('student-name', this.getStudentName)

3) 一次性绑定自定义事件，只触发一次
 <Student @student-name.on="getStudentName" />
 this.$refs.student.$once('student-name', this.getStudentName)

### 2. 触发自定义事件
1) this.$emit('student-name', this.sname)

### 3. 解绑自定义事件
1) 解绑单个事件 this.$off('student-name')
2) 解绑多个事件 this.$off(['student-name','demo'])
3) 暴力解绑所有事件  this.$off()
4) 销毁组件实例也能达到解绑组件自定义事件的效果
   this.$destroy()// 销毁当前组件实例，销毁后所有组件实例的自定义事件全都失效

### 4. 组件标签上也可以绑定原生DOM事件，但需要native修饰符才能把事件给组件的最外层盒子

### 5. 通过this.$refs.xxx.$on('student-name',callback)绑定自定义事件时，回调配置在methods中或是直接以箭头函数使用，以防this指向问题

## 四、 todolist-自定义事件
* APP---Header
* App---Footer
* 以上父子传递数据采用自定义事件
* Item由于涉及到祖孙关系暂且不改

## 五、全局事件总线
* 适用于任意组件通信
1) 安装全局事件总线
```vue
new Vue({
  render: h => h(App),
  // 在vue实例创建之前,在vue原型上安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
```

2) 在要接收数据的组件中创建自定义事件，并在组件销毁前解绑自定义事件
```vue
mounted() {
    // 在总线上创建自定义事件接收数据
    this.$bus.$on("send-name",(stuname)=> {
        this.stuname = stuname
    })
},
beforeDestroy() {
    // 在组件销毁前，销毁自定义事件
    this.$bus.$off('send-name')
}
```
3) 在发送数据的组件中触发自定义事件
```vue
handleClick() {
    // 触发事件传递数据
    this.$bus.$emit('send-name', this.sname)
}
```

## 六、 todolist-全局事件总线
* App----Item传信

## 七、消息发布与订阅(pubsub)
* 适用于任意组件间通信

1) 安装包： npm i pubsub-js
2) 在发布消息和订阅消息的组件中引入包
   import pubsub from 'pubsub-js'
3) 接收数据： A组件接收消息，则在A中订阅消息，订阅的回调在A中
```vue
mounted() {
    // 订阅消息
   this.pid = pubsub.subscribe('shasa',(msgName, data)=> {
    //    msgName为消息的名称，不使用的话可以用占位符__
       this.stuname = data
   })
},
beforeDestroy() {
    // 取消订阅
   pubsub.unsubscribe(this.pid) 
}
```
4) 提供数据： B组件发布消息
```vue
handleClick() {
    // 发布消息
   pubsub.publish('shasa', this.sname)
}
```
5) 最好在组件销毁前，取消订阅
```vue
beforeDestroy() {
    // 取消订阅
   pubsub.unsubscribe(this.pid) 
}
```

## 八、 编辑功能
* 添加编辑按钮
* 绑定点击事件
1) 点击编辑按钮，处于编辑状态，则显示修改输入框
   isEdit标记是否处于编辑状态，控制显示输入框还是任务名称，v-show
   <span v-show="!todo.isEdit">{{todo.tname}}</span>
    <input v-show="todo.isEdit" type="text" :value="todo.tname" ">
   同时也控制编辑按钮的显示，当处于编辑状态，编辑按钮隐藏
   <button v-show="!todo.isEdit" class="btn editBtn" @click="handleEdit(todo)">编辑</button>

2) 点击编辑按钮，回调
   判断被点击的任务是否含有isEdit属性，
   若没有，添加该属性且值为true，
   若有，直接把值改为true
```vue
handleEdit(todo) {
    if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        // 如果有
        todo.isEdit = true
    } else {
        // 如果没有，添加该属性
        this.$set(todo,'isEdit',true)
        console.log(todo);
    }  
}
```

3) 修改输入框失去焦点时，更新任务名称
   Item 触发更新任务事件，并把任务id和输入框的值传递过去
   this.$bus.$emit('updateTodo', todo.id, e.target.value)
    APP 创建自定义事件
    this.$bus.$on('updateTodo', this.updateTodo)
    解绑自定义事件
    this.$bus.$off('updateTodo')
    自定义事件的回调
```vue
updateTodo(id, tname) {
  this.todos.forEach((todoObj) => {
    if(todoObj.id === id) {
      todoObj.tname = tname
    }
  })
},
```

4) 此时问题： 点击了编辑框后必须先获取焦点才能失去焦点隐藏编辑框
* 编辑按钮点击后
```vue
 this.$nextTick(function() {
     // 若不使用nextTick代码执行顺序有问题，this.$refs.editIpt.focus()无效
     this.$refs.editIpt.focus()
 })
```
   

## 九、nextTick
1) this.$nextTick(callback)
2) 作用：在下一次Dom更新结束后执行其指定的回调
3) 适用于改变数据后，要基于更新后的新Dom进行一些操作，要在nextTick指定的回调中执行

## 十、动画与过渡
### 1. 动画
1) 给想要添加动画的元素包裹一个transition标签(有name属性)
```html
<transition name="bounce" appear>
    <p v-show="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</transition>
```
2) css3定义动画
```css
@keyframes bounce-move {
    0% {
        transform: translateX(-100%)
    }

    100% {
        transform: translateX(0px)
    }
}
```
3) 使用动画
```css
.bounce-enter-active {
    animation: bounce-move .5s linear;
}

.bounce-leave-active {
    animation: bounce-move .5s linear reverse;
}
```

### 2. 过渡
1) 用transition包裹单个元素，用transition包裹多个元素且每个元素标签添加key
```html
<transition-group name="bounce" appear>
    <p v-show="show" key="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p v-show="!show" key="2">avtrusova</p>
</transition-group>
```

2) 设置过渡的时间、曲线，位置
```css
/* 进入的起点、离开的终点 */
.bounce-enter,.bounce-leave-to{
	transform: translateX(-100%);
}
/* 进入/离开过渡的不同的缓和曲线 */
.bounce-enter-active,.bounce-leave-active{
	transition: 0.5s linear;
}
/* 进入的终点、离开的起点 */
.bounce-enter-to,.bounce-leave{
	transform: translateX(0);
}
```

### 3、 第三方集成动画库
* animate.css
* npm install animate.css --save
* import 'animate.css'
* name 值是固定的
* enter-active-class进入动画样式
* leave-active-class离开动画样式
```css
<transition-group 
	appear
	name="animate__animated animate__bounce" 
	enter-active-class="animate__swing"
	leave-active-class="animate__backOutUp"
>
    <p v-show="show" key="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p v-show="!show" key="2">avtrusova</p>
</transition-group>
```

## 十一、 todolist 动画
1) 添加和删除操作添加动画
* list
```html
<transition-group name="todo" appear>
    <Item :todo="todo" v-for="todo in todos" :key="todo.id"/>
</transition-group>
```
```css
/*定义动画 */
@keyframes add-sub {
    0% {
        transform: translateX(100%)
    }

    100% {
        transform: translateX(0)
    }
}

/*使用 */
.todo-enter-active {
    animation: add-sub .5s linear;
}

.todo-leave-active {
    animation: add-sub .5s linear reverse;
}
```

2) 优化：不能添加同名任务
* this.title与已有任务名比较
```js
add() {
    // 检验输入的数据不能同名和为空
    const arr = []
    this.todos.forEach((todoO) => {
      arr.push(todoO.tname)
    })
    // 判断
    if(!this.title.trim()) {
        return alert("输入不能为空")
    }else if(arr.indexOf(this.title) !== -1) {
        alert("任务不能重名")
        return this.title = ''
    
    // 输入数据不为空，将数据包装为对象
    const todoObj = {id: nanoid(), tname: this.title, done: false}
    // 通知父组件App添加任务
    // this.addTodo(todoObj)
    this.$emit('addTodo', todoObj)
    // 清空输入
    this.title = ''
}
```

## 十二、ajax请求：配置代理
### 1. 跨域问题
1) cors： 后端
2) jsonp: 少用，面试多问
3) 配置代理服务器(中介) ：服务器之间传递消息不使用ajax
4) axios: npm install axios --save    ,  import axios from 'axios'
### 2. 配置代理
* 两种方式同时二选一
#### 2.1 方式一 ：单个代理
1) 借助vue-cli开启
2) Vue Cli -- 配置参考
3) 步骤
* 配置代理
```js
// vue.config.js
module.exports = {
    // 开启代理服务器
    devServer: {
        // proxy值为被请求的服务器
        // 1. 只能代理一个服务器
        // 2. 请求资源时，先在项目静态资源public下找，若public静态资源有，就不会在请求5000服务器了
        // 3. 不能灵活控制到底走不走代理
        proxy: 'http://localhost:5000'
    }
}
```
* 请求
```js
axios.get('http://localhost:8080/students').then(
    response => {
        console.log('成功了',response.data);
    },
    error => {
        console.log('失败了',error.message);
    }
)
```

#### 2.2 方式二：多个代理
* 配置代理
```js
// vue.config.js
module.exports = {
    // 开启代理服务器
    devServer: {
        proxy: {
          '/apid': {
            target: 'http://localhost:5000', // 代理目标的基础路径
            pathRewrite: {'^/apid': ''}, // 路径重写
            ws: true, // 用于支持websocket
            changeOrigin: true // 控制服务器收到的请求头中的host值
            // changeOrigin: true    host 5000
            // changeOrigin: false    host 8080
            // changeOrigin和ws值默认为true
          },
          '/apic': {
            target: 'http://localhost:5001', 
            pathRewrite: {'^/apic': ''}, 
            ws: true, 
            changeOrigin: true 
          }
        }
    }
}
```
* 修改路径
```js
axios.get('http://localhost:8080/apic/cars').then(
    response => {
        console.log('成功了',response.data);
    },
    error => {
        console.log('失败了',error);
    }
)
```

## 十三、github搜索
### 真tm无语到家，把组件name写错导致卡半天
1) 静态组件
* bootsrap
npm install bootstrap@3 --save
在main.js中引入样式： import 'bootstrap/dist/css/bootstrap.min.css'

2）全局事件总线

## 十四、vue-resource（了解）
1) 安装： npm i vue-resource --save
2) 在main.js中引入
    import VueResource from 'vue-resource'

    Vue.use(VueResource)
3) 请求网络
* 和axios类似，把axios改成this.$http
```js
this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
    response => {
        console.log('成功了');
        // // 触发事件
        // this.$bus.$emit('getUsers', response.data.items)
        //请求成功后更新List的数据
		this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
    },
    error => {
        console.log('失败了',error.message);
        // 请求后更新List的数据
		this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
    }
)
```
4) 一直失败，看不到$http
    然后我把
    import VueResource from 'vue-resource'

    Vue.use(VueResource)
    中的VueResource首字母大写引入成功，就tm离谱，不晓得是不是这个原因

## 十五、 最后发现两个搜索案例的搜索结果是固定的,因为请求路径把keyWoprds写成了keyWord

## 十六、插槽
* 初始效果： 三个模块，三种分类列表
### 1. 默认插槽
* 要求： 第一个和第三个插入图片和视频
```html
<slot></slot>
```

### 2. 具名插槽
* 插入不同的内容
1) 给插槽名称
```html
<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
```
2) 往指定插槽插内容
* v-slot 只能添加在 <template>
```html
<Category title="电影">
  <template v-slot:center>
    <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunnmp4"></video>
  </template>
  <template v-slot:footer>
    <div class="foot">
      <a href="#">经典</a>
      <a href="#">热门</a>
      <a href="#">推荐</a>
    </div>
  </template>
</Category>
```
3) 不带参数的 v-slot 被假定对应默认插槽
```html
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```
### 3. 作用域插槽
* 要求： 第一个无序列表，第二个有序列表，第三个h4标签列表
* A父组件，B子组件，数据users在B中，A使用数据users
* 在B中将users作为slot的属性值绑定
```html B
<!-- 绑定在 <slot> 元素上的 attribute 被称为插槽 prop -->
<!-- :games="games" -->
<slot name="center" :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
```
```html A
<!-- 将插槽传过来的所有属性值构成的对象命名为 slotProps 
    使用：slotProps.games
-->
<Category title="游戏">
  <template v-slot:center="slotProps">
    <ol>
      <li v-for="(item,index) in slotProps.games" :key="index">
        {{item}}
      </li>
    </ol>
  </template>
</Category>
```

## 十七、状态管理vuex3
* 集中式存储管理应用的所有组件的状态
* 多个组件实例共享一份数据

### 零、安装
* npm i vuex@3
* 新建store/index.js文件，编写vuex核心文件
```js
// 创建核心store
// 引入vue支持
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

// 全局使用vuex插件
Vue.use(Vuex)


// state 存储数据
const state = {

}
// getters
const getters = {

}
//  actions响应组件中的动作
const actions = {

}
//  mutations 用于操作数据(state)
const mutations = {

}

// 创建并暴露store
export default new Vuex.Store({
    state: state,// es6简写   state
    actions,
    mutations
})
```
* 把store/index.js导入main.js： import store from './store'
* 在vue实例中注册store

### 一、核心
#### 1. State
1. 单一状态树，每个应用将仅仅包含一个 store 实例
2. 存放共享数据
#### 2. Getters
1. 可看做store的计算属性
2. 访问： $store.getters.方法名
#### 3. Mutations
1. 操作数据的方法，方法名一般大写
2. 两个参数：state，value
    state是数据，
    value组件传递的数据，
    组件调用mutations中的方法： this.$store.dispatch('addodd', this.num)，
    过程： 组件--mutations---actions
#### 4. Actions
1. 操作数据的行为，方法名称一般小写
2. 两个参数：context，value
    value是组件传递的数据，
    context是mini版的store，
    context.state获取state，
    context.commit('ADD', value)把value传给mutations中的ADD方法，
    组件调用actions中的方法：  this.$store.commit('ADD', this.num)，
    过程： 组件-----actions
#### 5. Modules 模块化编码
* 将不同逻辑功能的数据分开，每一个js文件都包含一个小仓库store
* 再将 不同.js文件引入index.js中

#### 6. 组件中读取或修改vuex中的数据
1) 读取： $store.state.counter
2) 修改： 
    this.$store.dispatch('actions中的方法名', 数据)
    this.$store.commit('mutations中的方法名', 数据)
    若没有网络请求或其他业务逻辑，组件可以直接越过actions直接向mutations读取

### 二、案例
#### 1. 求和，纯vue版
#### 2. 求和，vuex版
#### 3. 求和，getters版
* 要求，技术放大十倍
#### 4. mapState和mapGetters
* 要求：添加state数据school，subject，在组件中使用
* 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余
* mapState和mapGetters映射state和getters中的数据为计算属性
1) 步骤
- 在组件中引入mapState和mapGetters
```js
import {mapState,mapGetters} from 'vuex'
```
- 在使用数据的组件的计算属性中映射数据
```js
computed:{
	// 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // he是在插值语法中使用的名称
	...mapState({he:'counter',xuexiao:'school',xueke:'subject'})
	//借助mapState生成计算属性，从state中读取数据。（数组写法）
	// ...mapState(['counter','school','subject'])
	//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
	...mapGetters({bigCount:'bigCount'})
	
	//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
	// ...mapGetters(['bigSum'])

}
```
- 在组件模板中使用
```html
<!-- mapState、mapGetters对象写法 -->
<!-- <h3>当前计数: {{he}}</h3>
<h3>我在{{xuexiao}},学习{{xueke}}</h3>
<h3>当前计数放大10倍: {{bigCount}}</h3> -->
<!-- mapState、mapGetters数组写法 -->
<h3>当前计数: {{counter}}</h3>
<h3>我在{{school}},学习{{subject}}</h3>
<h3>当前计数放大10倍: {{bigCount}}</h3>
```

#### 5. mapActions和mapMutations
* import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
- 在组件的方法中映射数据
```js
methods: {
        // 1. 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
		// ...mapMutations({addNum:'ADD',subNum:'SUB'}),
 
		// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
		...mapMutations(['ADD','SUB']),

        // 2. 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
		// ...mapActions({addOddNum:'addodd',delayAddNum:'delayodd'})

		// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
		...mapActions(['addodd','delayodd'])
    }
```
- 在组件模板中使用映射数据 传参
```html
<!-- mapMutations 对象写法 -->
<!-- <button @click="addNum(num)">+</button>
<button @click="subNum(num)">-</button> -->
<!-- mapMutations 数组写法 直接使用mutations里的方法 -->
<button @click="ADD(num)">+</button>
<button @click="SUB(num)">-</button>
<!-- mapActions 对象写法 -->
<!-- <button @click="addOddNum(num)">当前计数为奇数再加</button>
<button @click="delayAddNum(num)">延迟加</button> -->
<!-- mapActions 数组写法 直接使用actions里的方法 -->
<button @click="addodd(num)">当前计数为奇数再加</button>
<button @click="delayodd(num)">延迟加</button>
```

#### 6. 多组件共享数据
* 要求： 组件Count和Person，Count可以获取到Person的人数，Person可以获取到Count中的计数和
* 不要直接修改state值，要通过mutations

#### 7. vuex模块化
* 把不同功能的代码抽离放在单独js中
```js
export default {
    namespaced: true,
    // state 存储数据
    state : {
        personList: [
            {id:'001',name:'特娃'}
        ]

    },
    // getters 用于将state中的数据进行加工,参数state
    getters : {
    },
    //  actions响应组件中的动作
    actions : {
    },
    //  mutations 用于操作数据(state)
    mutations : {
        // 加人
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    }
}
```
* 每个js都是一个小store
* 每个js要开启命名空间： namespaced: true
* 把每个js导入index.js中
```js
// index.js
// 引入vue支持
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

import CountOptions from './count'
import PersonOptions from './person'

// 全局使用vuex插件
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: CountOptions,
        personAbout: PersonOptions
    }
})
```
* 组件中使用
```js
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
methods: {
	// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
	...mapMutations('countAbout',['ADD','SUB']),
	// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
	...mapActions('countAbout',['addodd','delayodd'])
},
computed:{
	// 借助mapState生成计算属性，从state中读取数据。（数组写法）
	...mapState('countAbout',['counter','school','subject']),
    ...mapState('personAbout',['personList']),
	// 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
	...mapGetters('countAbout',['bigCount']),
}
```

## 十八、路由
### 1.路由的基本使用
1. 安装vue-router，命令：```npm i vue-router@3```

2. 应用插件：```Vue.use(VueRouter)```

3. 编写router配置项:并在vue实例中注册router

   ```js
   //引入VueRouter
    import VueRouter from 'vue-router'
    //引入Luyou 组件
    import About from '../pages/About'
    import Home from '../pages/Home'

    //创建router实例对象，去管理一组一组的路由规则
    const router = new VueRouter({
        routes:[
            {
                path: '/',
                // 路由重定向
                redirect: '/about'
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/home',
                component: Home
            }
        ]
    })

    //暴露router
    export default router
   ```

4. 实现切换（active-class可配置高亮样式）

    ```vue
<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
<router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
    ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```

### 2.几个注意点

1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。

### 3.多级路由（嵌套路由）

1. 配置路由规则，使用children配置项：

   ```js
   routes:[
   	{
   		path:'/about',
   		component:About,
   	},
   	{
   		path:'/home',
   		component:Home,
   		children:[ //通过children配置子级路由
   			{
   				path:'news', //此处一定不要写：/news
   				component:News
   			},
   			{
   				path:'messages',//此处一定不要写：/message
   				component:Messages
   			}
   		]
   	}
   ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```

### 4.路由的query参数

1. 传递参数

   ```vue
   <li v-for="m in messageList" :key="m.id">
		<!-- 跳转路由并携带query参数，to的字符串写法 -->
		<!-- <router-link :to="`/home/message/detail?id=${m.id}&title{m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; --
		<!-- 跳转路由并携带query参数，to的对象写法 -->
		<router-link :to="{
			path:'/home/messages/detail',
			query:{
				id:m.id,
				title:m.title
			}
		}">
			{{m.title}}
		</router-link>
	
	</li>
   ```

2. 接收参数：

   ```js
   $route.query.id
   $route.query.title
   ```
### 5.命名路由

1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                        name:'hello' //给路由命名
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link class="list-group-item" active-class="active" :to="{name: 'about'}">About</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link :to="{
        // 简化前：/home/message/detail
	  	name: 'detail',
	  	query:{
	  		id: m.id,
	  		title: m.title
	  	}
	  }">
	  	{{m.title}}
	  </router-link>
      ```

### 6.路由的params参数

1. 配置路由，声明接收params参数

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
                    name: 'detail',
                    // 使用占位符声明接收params参数
                    path: 'detail/:id/:title',
                    component: Detail
                },
   			]
   		}
   	]
   }
   ```

2. 传递参数

   ```vue
   <ul>
		<li v-for="m in messageList" :key="m.id">
			<!-- 跳转路由并携带params参数，to的字符串写法 -->
			<!-- <router-link :to="`/home/messages/detail/${m.id}/${m.title`">{{m.title}}</router-link>&nbsp;&nbsp; -->
			<!-- 跳转路由并携带params参数，to的对象写法 -->
			<router-link :to="{
				name: 'detail',
				params:{
					id: m.id,
					title: m.title
				}
			}">
				{{m.title}}
			</router-link>
		
		</li>
	</ul>
   ```

   > 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：

   ```js
   $route.params.id
   $route.params.title
   ```

### 7.路由的props配置

​	作用：让路由组件更方便的收到参数
```js
<ul>
	<li v-for="m in messageList" :key="m.id">
	
		<!-- 跳转路由并携带query参数，to的对象写法 -->
		<router-link :to="{
			name: 'detail',
			query:{
				id: m.id,
				title: m.title
			}
		}">
			{{m.title}}
		</router-link>
	
	</li>
</ul>
```

```js
{
	name:'detail',
	path:'detail/:id/:title',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

2. 接收
```vue
props:['id','title'],

<ul>
	<li>消息编号：{{id}}</li>
	<li>消息标题：{{title}}</li>
</ul>
```

### 8.```<router-link>```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```
4. replace只能替代当前的一条历史记录

### 9.编程式路由导航

1. 作用：不借助```<router-link> ```实现路由跳转，让路由跳转更加灵活

2. 具体编码：

    ```html
    <button @click="pushShow(m)">push查看</button>
	<button @click="replaceShow(m)">replace查看</button>
    ```

   ```js
   pushShow(m){
  	this.$router.push({
  		name:'detail',
  		query:{
  			id:m.id,
  			title:m.title
  		}
  	})
  },
  replaceShow(m){
  	this.$router.replace({
  		name:'detail',
  		query:{
  			id:m.id,
  			title:m.title
  		}
  	})
  }

  back(){
  	this.$router.back()// 后退
  },
  forward(){
  	this.$router.forward() // 前进
  },
  test(){
      //  正数  前进
      // 负数 后退
  	this.$router.go(3)
  }
   ```

### 10.缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁(保留前进前的状态)。

2. 具体编码：

   ```vue
   <!-- 缓存多个路由组件  值为组件名称 -->
   <!-- <keep-alive :include="['News','Messages']"> -->
   		
   <!-- 缓存一个路由组件 -->
   <keep-alive include="News">
   	<router-view></router-view>
   </keep-alive>
   ```

### 11.两个新的生命周期钩子
* 使用状态：由于使用了全局守卫，beforeDestroy等生命周期函数定义的方法失效

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字：
   1. ```activated```路由组件被激活时触发。
   2. ```deactivated```路由组件失活时触发。
3. 激活的意思： 组件正在显示中


### 12.路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

3. 全局守卫:
* 要求： 1. news和messages需要权限才能查看，学校是尚硅谷才有权限查看
* 给每个路由的meta属性添加属性isAuth，若值为false，不需要权限就能访问改路由对应的组件
* 若值为true则需要权限才能查看
* 要求1 用全局前置路由守卫解决
* 要求: 2. 给每个路由对应的组件起个标题，跳转到哪就显示那个标题
* 如果无权限访问，就不跳转到那个标题
* 要求2 用全局后置路由守卫解决

   ```js
   // 全局前置守卫：初始化时执行、每次路由切换前执行
   router.beforeEach((to,from,next)=>{
   	console.log('beforeEach',to,from)
   	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
   		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
   			next() //放行
   		}else{
   			alert('暂无权限查看')
   			// next({name:'guanyu'})
   		}
   	}else{
   		next() //放行
   	}
   })
   
   // 全局后置守卫：初始化时执行、每次路由切换后执行
   router.afterEach((to,from)=>{
   	console.log('afterEach',to,from)
   	if(to.meta.title){ 
   		document.title = to.meta.title //修改网页的title
   	}else{
   		document.title = 'vue_test'
   	}
   })
   ```

4. 独享守卫:
* 给某个组件独家守卫
* 可以和全局后置路由守卫搭配使用

   ```js
   beforeEnter(to,from,next){
   	console.log('beforeEnter',to,from)
   	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
   		if(localStorage.getItem('school') === 'atguigu'){
   			next()
   		}else{
   			alert('暂无权限查看')
   			// next({name:'guanyu'})
   		}
   	}else{
   		next()
   	}
   }
   ```

5. 组件内守卫：通过路由规则进入组件前，离开组件前
* 重点是通过路由规则转换页面时触发
* 不在router配置文件中设置，在组件中设置
* about组件

   ```js
   //进入守卫：通过路由规则，进入该组件时被调用
   beforeRouteEnter (to, from, next) {
   },
   //离开守卫：通过路由规则，离开该组件时被调用
   beforeRouteLeave (to, from, next) {
   }
   ```

### 13.路由器的两种工作模式



1. 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3. hash模式：
   1. 地址中永远带着#号，不美观 。
   2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
   3. 兼容性较好。
4. history模式：
   1. 地址干净，美观 。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
5. 直白的说hash模式，部署服务器上线以后，多级路由页面路径刷新后可以找到资源，
   直白的说history模式，部署服务器上线以后，多级路由页面路径刷新后找不到资源会报错
   解决方式： 后端解决，使用中间件
    代码如41中server.js
   mode:'history',

### 14 element-ui
* 安装： npm i element-ui -S
* 引入：在main.js中

1. 完整引入
```js
// 完整引入
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

// 应用ElementUI
Vue.use(ElementUI);
```

2. 按需引入
* 首先，安装babel-plugin-component:
* npm install babel-plugin-component -D
* 其次，配置babel.config.js文件
```js
module.exports = {
  presets: [
	'@vue/cli-plugin-babel/preset'
  ],
//   以下为element-ui配置
  "plugins": [
	[
	  "component",
	  {
		"libraryName": "element-ui",
		"styleLibraryName": "theme-chalk"
	  }
	]
  ]
}
```
* 单独定义个element.js文件，常用组件如下,根据需要增删
```js
  import Vue from 'vue';
  import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Timeline,
    TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    PageHeader,
    CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification
  } from 'element-ui';

  Vue.use(Pagination);
  Vue.use(Dialog);
  Vue.use(Autocomplete);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(RadioButton);
  Vue.use(Checkbox);
  Vue.use(CheckboxButton);
  Vue.use(CheckboxGroup);
  Vue.use(Switch);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(OptionGroup);
  Vue.use(Button);
  Vue.use(ButtonGroup);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(DatePicker);
  Vue.use(TimeSelect);
  Vue.use(TimePicker);
  Vue.use(Popover);
  Vue.use(Tooltip);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.use(Tag);
  Vue.use(Tree);
  Vue.use(Alert);
  Vue.use(Slider);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);
  Vue.use(Progress);
  Vue.use(Spinner);
  Vue.use(Badge);
  Vue.use(Card);
  Vue.use(Rate);
  Vue.use(Steps);
  Vue.use(Step);
  Vue.use(Carousel);
  Vue.use(CarouselItem);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Cascader);
  Vue.use(ColorPicker);
  Vue.use(Transfer);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Aside);
  Vue.use(Main);
  Vue.use(Footer);
  Vue.use(Timeline);
  Vue.use(TimelineItem);
  Vue.use(Link);
  Vue.use(Divider);
  Vue.use(Image);
  Vue.use(Calendar);
  Vue.use(Backtop);
  Vue.use(PageHeader);
  Vue.use(CascaderPanel);

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

``` 

* 在main.js中导入该elementjs即可使用
```js
import '路径/element.js'
```
	 