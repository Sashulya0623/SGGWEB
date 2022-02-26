# React ajax
## 说明
1. React本身只关注于界面, 并不包含发送ajax请求的代码
2. 前端应用需要通过ajax请求与后台进行交互(json数据)
3. react应用中需要集成第三方ajax库(或自己封装)
## react引用ajax库
1. jQuery: 比较重, 如果需要另外引入不建议使用
2. axios: 轻量级, 建议使用

# FeHelper(前端助手)
打开快捷键：Alt+shift+j

# 解决ajax跨域问题： 配置代理
跨域：假设我访问 a 站点，后台返回给我一个页面，然后我又想在 a 站点的这个页面去访问 b 站点的资源，这就是一个跨域的效果
配置代理：a站的微服务器代替a站点客户端向b站发起访问请求
为什么代理可以：因为没有ajax引擎

## 获取数据(服务端server1/2.js)
```jsx
// 一开始的写法
getStudentData = ()=>{
  axios.get('http://localhost:5000/students').then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失败了',error);}
  )
}
```
* 报错
![跨域](./img/跨域错误.jpg)
分析：数据放在服务站点5000，在客户端站点3000的页面上请求5000的资源，形成跨域
解决：配置代理
![配置代理作用](./img/配置代理作用.jpg)

* 一共有2种配置方法(只能选其一用，不能同时用)

## 方法一(单个服务器站点：5000)
> 在package.json中追加如下配置
```json
"proxy":"http://localhost:5000"
```
> 请求的站点5000改成3000
```jsx
getStudentData = ()=>{
  axios.get('http://localhost:3000/students').then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失败了',error);}
  )
}
```

**说明：**
1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）


## 方法二(多个服务器站点：5000，5001)

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

```js
const {createProxyMiddleware} = require('http-proxy-middleware')
   
module.exports = function(app) {
  // app.use可以配置任意数量的转发，代理不同的接口和服务器

  // 将/api1相关接口代理转发target对应的服务器上
  // 相当于请求了http://localhost:5000/api1
  app.use('/api1', createProxyMiddleware({
    target: 'http://localhost:5000',
    // changeOrigin默认为false,是否改变原始主机头为目标url
    // 请求原本是3000发出的，值为true，改成了是5000发的
    changeOrigin: true,
    // pathRewrite重写path地址，
    // 将请求的/api1重写解析到/  实际没有api1路径
    pathRewrite: {'^/api1': ''}
  }))
  app.use('/api2', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: {'^/api2': ''}
  }))
}
```

3. 客户端请求写法
```jsx
getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
        response => {console.log('成功了',response.data);},
        error => {console.log('失败了',error);}
    )
}

getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
        response => {console.log('成功了',response.data);},
        error => {console.log('失败了',error);}
    )
}
```
说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。