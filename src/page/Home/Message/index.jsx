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

  replaceShow=(id, title)=>{
    // replace跳转
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    this.props.history.replace(`/home/message/detail`,{id, title})
  }

  pushShow=(id, title)=>{
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    this.props.history.push(`/home/message/detail`, {id, title})
  }

  forward=()=>{
    this.props.history.goForward()
  }

  back=()=>{
    // 正数前进、负数后退
    this.props.history.goBack()
  }

  go=()=>{
    this.props.history.go(-2)
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
                {/* <NavLink to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</NavLink> */}
                {/* 向路由组件传search参数 */}
                {/* <NavLink to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</NavLink> */}
                {/* 向路由组件传递state参数 */}
                <NavLink replace={true} to={{pathname:'/home/message/detail/', state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</NavLink>
                &nbsp;<button onClick={()=>this.pushShow(messageObj.id, messageObj.title)}>push 查看</button>
                &nbsp;<button onClick={()=>this.replaceShow(messageObj.id, messageObj.title)}>replace查看</button>
              </li>
            )
          })
        }
      </ul>
      <hr></hr>
      {/* params参数声明接收 */}
      {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}
      {/* search 参数无需声明接收，正常注册路由即可 */}
      {/* <Route path='/home/message/detail' component={Detail}></Route> */}
      {/* state 参数无需声明接收，正常注册路由即可 */}
      <Route path='/home/message/detail' component={Detail}></Route>
      &nbsp;<button onClick={this.forward}>前进</button>
      &nbsp;<button onClick={this.back}>后退</button>
      &nbsp;<button onClick={this.go}>Run</button>
      
    </div>
    )
  }
}
