import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Header from './components/Header'

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
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="pane1">
                <div className="pane1-body">
                {/* 注册路由 */}
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

