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

## 七、todolist案例
### 1. 编写静态页面，分成各组件
### 2. 初始化列表
### 3. 添加任务，删除任务，清除已完成任务
* 都应用了父子组件通过props传递消息
* 先在父组件App定义方法，子组件调用该方法向父组件传递数据
* 复选框v-model绑定的是选中状态true or false
