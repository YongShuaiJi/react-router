import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
        // children = 标签体 自动赋值
        <NavLink activeClassName="lina" className="list-group-item" {...this.props} />
    )
  }
}
