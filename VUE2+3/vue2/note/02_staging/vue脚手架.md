# vue脚手架
- Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）
- 最新的版本是 4.x

## @vue/cli  4.x使用
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

