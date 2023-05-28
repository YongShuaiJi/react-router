import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import Detail from './Detail'
export default class index extends Component {
  state = {
    messageArr:[
      {id: 1, title: '消息1'},
      {id: 2, title: '消息2'},
      {id: 3, title: '消息3'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
      <ul>
        {
          messageArr.map((messageObj)=>{
            return (
              <li key = {messageObj.id}>
                {/* 向路由组件传params参数 */}
                <NavLink to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</NavLink>
              </li>
            )
          })
        }
      </ul>
      <hr></hr>
      {/* 声明接收参数 */}
      <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
    </div>
    )
  }
}
