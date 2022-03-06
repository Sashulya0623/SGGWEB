module.exports = {
    // 开启代理服务器
    devServer: {
        // proxy值为被请求的服务器
        // 1. 单个代理配置
        // proxy: 'http://localhost:5000'

        // 2. 多个代理配置
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