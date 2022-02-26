# React路由
**版本说明**
1. v5版本既兼容了 class component（react v16.8前），又兼容了function component(v16.8及以后，即hook)
2. v6版本，若仍然使用this.props.history.push()，此时props会提示是空值，v6文档里把路由组件默认接受的三个属性给移除了，官网文档里给出的解决方案是使用useNavigate()这个hook，但是hook只能存在于无状态组件（function component），无法用在类组件中（class component）
**版本建议**
1. 使用class commponent（类组件）进行项目开发的，建议react-router-dom 使用v5最新版
2. 使用function component（函数组件）进行项目开发的，建议使用最新的v6版本

## React v5最新版5.3.0