# react-router
### 路由的基本使用
- 明确界面的导航区、展示区
- 导航去的a标签改为Link 标签
> <Link to="/about">DEMO</Link>
- 展示区写Route 标签进行路径匹配
> <Route path="/about" component={DEMO} /> 
- <App>的最外侧包裹一个<BrowserRouter> 或者 <HashRouter>