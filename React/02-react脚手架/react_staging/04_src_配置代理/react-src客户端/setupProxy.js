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