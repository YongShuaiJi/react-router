import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Header from './components/Header'
import styleOther from './App.css'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
   
  render() { 
    return (
      <div id='root'>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
              {/* React中由连接实现切换组件--编写路由链接 */}
                {/* <NavLink activeClassName="lina" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="lina" className="list-group-item" to="/home">Home</NavLink> */}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>  
              </div>
            </div>
            <div className="col-xs-6">
              <div className="pane1">
                <div className="pane1-body">
                {/* 注册路由 */}
                  <Switch>
                  {/* exact={true} == exact 严格匹配*/}
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route> 
                    {/* Redirect 重定向，谁也匹配不上的时候就匹配这个 */}
                    <Redirect to="/about"></Redirect>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

