import React , { Component } from 'react';
import {connect} from 'react-redux';
import { searchFocused , 
         searchBlur ,
         getHotList,mouseIn,mouseOut,changeSwitch} from './store/actionCreator' 
import {logoutAction} from '../../pages/login/store/actionCreator'
import headerSty from './header.module.scss'
import {Link} from 'react-router-dom'
class Header extends Component {
    // constructor(props) {
    //     super(props)
    //     放入react-redux
    //     this.state = {
    //         focused : false
    //     }
    //     this.handleFocus = this.handleFocus.bind(this)
    //     this.handleBlur = this.handleBlur.bind(this)
    // }
    render() {
        return (
            <div className={headerSty.headerWrapper}>
                <a className={headerSty.logo} href="./"><img alt="" src={require('../../statics/logo.png')} /></a>
                <div className={headerSty.Nav}>
                    <div className={`${headerSty.NavItem} ${headerSty.NavLeft} ${headerSty.active}`}>首页</div>
                    <div className={`${headerSty.NavItem} ${headerSty.NavLeft} `}>下载</div>
                    {
                        this.props.isLogin ? 
                        <div onClick={this.props.goLogout} className={`${headerSty.NavItem} ${headerSty.NavRight}`}>退出</div> :
                        <Link to='/login'>
                            <div className={`${headerSty.NavItem} ${headerSty.NavRight}`}>登錄</div>
                        </Link>
                    }
                    <div className={`${headerSty.NavItem} ${headerSty.NavRight}`}>Aa</div>
                    <div className={headerSty.searchWrapper} >
                        <input placeholder="搜索"  
                               className={this.props.focused ? headerSty.NavSearchFocused : headerSty.NavSearch}
                               onFocus={this.props.handleFocus}
                               onBlur= {this.props.handleBlur}
                        />
                        <span className={this.props.focused ? `${headerSty.searchIconFocused} iconfont` : `${headerSty.searchIcon} iconfont`}>&#xe848;</span>
                        {this.showSearchList(this.props.focused,this.props.mouseIn)}                       
                    </div>
                </div>
                <div className={headerSty.addition}>                    
                    <Link to='/write'>
                        <div className={`${headerSty.button} ${headerSty.writting}`}>
                            写文章<span className="iconfont">&#xe615;</span>
                        </div>
                    </Link>
                    <div className={`${headerSty.button} ${headerSty.reg}`}>注册</div>
                </div>
            </div>
        )
    }
    //改为react-readux写法 这些方法就在mapDispatchToProps定义 并且挂载到react-redux上了
    // handleFocus() {
    //     this.setState({
    //         focused:true
    //     })
    // }
    // handleBlur() {
    //     this.setState({
    //         focused:false
    //     })
    // }
    showSearchList(show,mouseIn) {
       
        if(show || mouseIn) {
            return (
                <div onMouseEnter={this.props.handleMouseIn} 
                     onMouseLeave = {this.props.handleMouseOut}
                     className={headerSty.searchInfo}>
                    <div className={headerSty.searchInfoTitle}>
                        热门搜索
                        <div onClick={()=>{this.props.handleSwitch(this.props.page,this.props.totolPage,this.spin)}}
                             className={headerSty.searchInfoSwitch}>
                             <span ref = {(spin)=>{this.spin = spin}} 
                                   className={`iconfont ${headerSty.spin}`}>
                              &#xe857;</span>
                             换一换
                        </div>
                    </div>
                    <div style={{lineHeight:'30px'}}>                   
                        {
                            // this.props.hotList.map(item=>{
                            //     return (
                            //         <a key={item} className={headerSty.searchInfoItem}>{item}</a> 
                            //     )
                            // })
                            //这里要判断当前页 每页只显示10条
                           this.getHotList()
                            
                        }
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }
    getHotList() {
        const {page,hotList} = this.props
        const pageList = [];
        if(hotList.length) {  //因为这里渲染页面 必须等异步数据回来了才有
            for(let i = (page - 1)*10 ; i< page * 10 ; i++) {
                pageList.push(
                    <a key={hotList[i]} className={headerSty.searchInfoItem}>{hotList[i]}</a> 
                )
            }
        }
        return pageList;
    }
    
}

const mapStateToProps = (state) => {
    return {
        //用了combineReducers 所以多了一层header 
        focused:state.header.focused,
        hotList:state.header.hotList,
        page:state.header.page,
        mouseIn:state.header.mouseIn,
        totolPage : state.header.totolPage,
        isLogin:state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            // const action = {
            //     type : 'search_focused'
            // }
            // dispatch(action)
            dispatch(searchFocused())
            //异步调取热门搜索LIST 需要安装redux-thunk
            dispatch(getHotList())        
        },

        handleBlur() {
            // const action = {
            //     type : 'search_blur'
            // }
            // dispatch(action)
            dispatch(searchBlur())
        },

        handleMouseIn() {
            dispatch(mouseIn())
        },
        handleMouseOut() {
            dispatch(mouseOut())
        },
        handleSwitch(page,totolPage,spin) {
            //如果 当前页小于总页码 每次点击换一换就让page+1传递给reducer
            if(page<totolPage) {
                dispatch(changeSwitch(page + 1))
            }
            else {
                dispatch(changeSwitch(1))
            }

            //旋转小图标
            //取得原始角度 第一次肯定什么都没有 走else设置为0
            let orginAngle = spin.style.transform.replace(/\D/ig,'');
            if(orginAngle) {
                orginAngle = parseInt(orginAngle,10)
            }
            else {
                orginAngle = 0;
            }
            spin.style.transform = 'rotate('+(orginAngle + 360)+'deg)'
            
        },

        goLogout() {
            //header组件要调用登录组件的action 所以引用的logoutAction
            //这个方法是从login/store/actionCreator中调用的
            dispatch(logoutAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);