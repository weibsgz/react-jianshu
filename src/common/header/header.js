import React , { Component } from 'react';
import {connect} from 'react-redux';
import { searchFocused , searchBlur } from './store/actionCreator' 
import headerSty from './header.module.scss'

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
                    <div className={`${headerSty.NavItem} ${headerSty.NavRight}`}>登录</div>
                    <div className={`${headerSty.NavItem} ${headerSty.NavRight}`}>Aa</div>
                    <div className={headerSty.searchWrapper} >
                        <input placeholder="搜索"  
                               className={this.props.focused ? headerSty.NavSearchFocused : headerSty.NavSearch}
                               onFocus={this.props.handleFocus}
                               onBlur= {this.props.handleBlur}
                        />
                        <span className={this.props.focused ? `${headerSty.searchIconFocused} iconfont` : `${headerSty.searchIcon} iconfont`}>&#xe848;</span>
                    </div>
                </div>
                <div className={headerSty.addition}>                    
                    <div className={`${headerSty.button} ${headerSty.writting}`}>
                        写文章<span className="iconfont">&#xe615;</span>
                    </div>
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
}

const mapStateToProps = (state) => {
    return {
        //用了combineReducers 所以多了一层header 
        focused:state.header.focused
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
        },

        handleBlur() {
            // const action = {
            //     type : 'search_blur'
            // }
            // dispatch(action)
            dispatch(searchBlur())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);