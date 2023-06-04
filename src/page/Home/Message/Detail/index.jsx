import React, { Component } from 'react'
import qs from 'querystringify'

const temp = [
    {id: 1, name:'小王', phone: '13811112222'},
    {id: 2, name:'小张', phone: '13833332222'},
    {id: 3, name:'小刘', phone: '13844442222'}
]
export default class index extends Component {
  render() {
    console.log('this.props=',this.props)
    // 接收params
    // const {id, title} = this.props.match.params

    // 接收search
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search)

    // 接收state
    const {id, title} = this.props.location.state || {}

    const result = temp.find((obj)=>{
        return obj.id == id
    }) || {}
    return (
      <div>
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Name:{result.name}</li>
            <li>Phone:{result.phone}</li>
        </ul>
      </div>
    )
  }
}
