import React, { Component } from 'react';
import Item from '../Item'

export default class List extends Component {
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
}
