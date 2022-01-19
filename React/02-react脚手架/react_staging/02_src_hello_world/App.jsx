// 创建'外壳'组件：包含所有的组件

// 这个花括号不是解构赋值，而是用了多种导入方式
// ①  import React,{Component} from 'react'
// ②   import React from 'react'   
// ② 默认导入(default import)：导入react模块（组件）中的默认组件，并且命名为React
// ③   import {Component} from 'react'
// ③ 成员导入（member import 、named import）： 引入react文件中的成员组件Component,可以用{}形式引入多个成员组件
// ③ 的意思是导入'react'中的成员Component组件: Const Component = React.Component
import React,{Component} from 'react'

// 导入Hello  Welcome组件
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
               <Hello/>
               <Welcome/>
            </div>
        )
    }
}