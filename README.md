### 一 关于CSS （本项目用的SCSS）
1.reject了 用css-moudules的写法 
配置config/webpack.config.js 里面设置 { importLoaders: 1,modules: true }
使用  import indexCss from '../../css/style.scss';
className={indexCss.body}
className={indexCss["body-wrapper"]}
注意className带符号的 要用indexCss["body-wrapper"]这种形式


2.使用SCSS
默认文件名是以 [className].module.scss
classname需要写多个类的 ： <div className={`${headerSty.NavLeft} ${headerSty.active}`}></div>


### 二 使用ICONFONT注意点

1. 因为使用css modules 可能iconfont.css里的样式会被变为哈希值而找不到，而我们又在入口index.js里引入，所以还是拷贝 .iconfont.css 里的样式到 index.html里 这样让他不被转成哈希

2. 最好使用unicode模式 这样index.html只需要拷贝一个iconfont.css就行了


### 三 使用react-reudx

1. 先安装 npm i redux --save    npm i react-redux --save

2. 编写store/index.js reducer.js 
`redux 触发先触发action发送给store  store转给reducer处理，reducer返回state改变页面状态`

3. APP.js 使用provider全局挂载store
```
<Provider store={store}>
      <Header></Header>     
    </Provider>
```

4. ./common/header.js使用 用connect 做连接
```
const mapStateToProps = (state) => {
    return {
        focused:state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = {
                type : 'search_focused'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
```

这样原来取this.state的数据 改为从this.props取 相关的方法也从this.prop取 当对应方法挂载到mapDispatchToProps上

5. 优化 使用combinReducers来拆分 各个业务自己的reducer 注意 上边的mapStateToProps返回state
就用改为
```
 return {
        focused:state.header.focused
    }
```
因为总的reducer文件到处的时候设置了header
```
export default combineReducers({
    header:HeaderReducer
})
```

### 4.用redux-thunk处理异步(可在acitonCreator里写异步函数)
1. npm i redux-thunk -S

2. 修改 ./store/index.js 使之可以使用thunk和谷歌开发者工具redux两个中间件加上原来有的reducer

3. 这样actionCreator里可以action返回异步函数


### 5. react-router-dom

1. npm i react-router-dom -D

2. 关于2种设置路由传参的方法 https://www.jianshu.com/p/abab51c70cfb

3. 重定向： return <Redirect to='/'></Redirect> 见pages/login/index.js

4. 权限： 组件内部可以通过react-redux 判断是否登录 
```
 render() { 
        const {isLogin} = this.props   
        //如果登錄 返回首頁
        if(isLogin) {
            return (
                <div>
                    写作页面
                </div>
            )
        }
        else {
            return <Redirect to='/login'></Redirect>
        }
        
       
    }

```

5. react-loadable  可以做异步组件

1. `yarn add react-loadable`
2. 需要异步加载的组件文件夹下新建 loadable.js 本列：/pages/detail/loadable.js
3. APP.JS引入组件的方式要修改为 import Detail from './pages/detail/loadable'
4. 如果detal.js中要取路由参数就会报错 这要借助 withRouter 参见./pages/detail/index.js