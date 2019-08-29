import React from 'react';
import Header from './common/header/header'
import { Provider } from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
import store from './store/index'
function App() {
  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <Header></Header> 
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/detail/:id' component = {Detail}></Route>
        <Route exact path = '/login' component = {Login}></Route>
        {
          /* 业务跳转设置： <Link key={i} to={'/detail/' + v.id}></Link> */
          // 业务里可通过 this.props.match.params.id 取
          // 关于2种设置路由传参的方法 https://www.jianshu.com/p/abab51c70cfb
        }

        {/* 权限设置  header组件Link*/}
        <Route exact path = '/write' component = {Write}></Route>
      </BrowserRouter>    
    </Provider>
  );
}

export default App;
