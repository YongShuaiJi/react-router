# react-router

### 路由的基本使用

- 明确界面的导航区、展示区
- 导航去的a标签改为Link 标签 ` <Link to="/about">DEMO</Link> `
- 展示区写Route 标签进行路径匹配` <Route path="/about" component={DEMO} /> `
- ` <App> `的最外侧包裹一个 `<BrowserRouter>  `或者`<HashRouter>`

### 路由组件和一般组件

- 写法不同
  一般组件 : ` <Demo />`
  路由组件 : `<Route path="/about" component={About}></Route>`

- 存放位置不同
  一般组件：`components`
  路由组件：` pages`

- 接收到的 `props` 不同
  一般组件：写组件标签时传递什么就收到什么
  路由组件：接收三个固定的属性

```json
# 路由组件接收到的 props
{
  "history": {
      "action": "PUSH",
      "go": ƒ goBack(),
      "goBack": ƒ goBack()
      "goForward": ƒ goForward()
      "push": ƒ push(path, state)
      "replace": ƒ replace(path, state)
  },
  "location": {
      "pathname": "/about",
      "search": "",
      "state": undefined
  },
  "match": {
      "path": "/about",
      "url": "/about",
      "isExact": true,
      "params": {}
  }
}
```

### 组件封装中的一些一般说明
- NavLink 可以实现路由链接的高亮，通过activeClassName 指定样式名
- 标签体内容是一个特殊的标签属性 children （默认就有）
- 通过 this.props.chuldren 可以获取标签体内容
