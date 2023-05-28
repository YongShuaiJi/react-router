import { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
import styleOther from '../../App.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home 组件内容</h3>
        <ul className='nav nav-tabs'>
          <li>
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to='/home/message'>Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home/news'></Redirect>
        </Switch>
      </div>
    )
  }
}
