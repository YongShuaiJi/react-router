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

### Switch 的使用
- 通常情况下， path和component是一一对应的关系
- Switch可以提高路由匹配效率， 匹配上就直接 break; 不在进行下一个匹配

### 多级路径下样式丢失问题
- 原因：样式文件引用了相对路径
- 解决：public/index.html 中引用样式的时候不写 `./` 写 `/` (使用绝对路径)， 或者写 `%PUBLIC_URL%` (常用，只能在React脚手架中这样写)， 或者使用 HashRouter

#### 路由的匹配问题
- 默认使用模糊匹配（输入的路径必须包含匹配的路径，且顺序要一致）
- 开启严格匹配 `<Route exact  path="/about" component={About}></Route>`
- 严格匹配不需要一直开启，因为有时候会导致无法匹配二级路由

### 重定向匹配
- 当所有路由都匹配不上的时候匹配 Redirect 组件指向的路由 `<Redirect to="/about"></Redirect>`

### 嵌套路由
- 注册子路由时要写上父路由的path值
- 路由的匹配是按照注册路由的顺序进行的
