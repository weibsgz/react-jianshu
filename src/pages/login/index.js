import React,{Component} from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {loginAciton} from './store/actionCreator'
import loginSty from './login.module.scss'
class Login extends Component {
    render() { 
        const {isLogin,goLogin} = this.props   
        //如果登錄 返回首頁
        if(!isLogin) {
            return (
                <div className={loginSty.loginWrapper}>
                   <div className={loginSty.loginBox}>
                      <input ref={(input)=>{this.account = input}} placeholder="賬號"></input>
                      <input ref={(input)=>{this.password = input}} placeholder="密碼"></input>
                      <button onClick={()=>{goLogin(this.account,this.password)}}>登錄</button>
                   </div>
                </div>
            )
        }
        else {
            return <Redirect to='/'></Redirect>
        }
        
       
    }
}

const mapStateToProps = (state) => {
    return {
       isLogin:state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {      
        goLogin(account,password) {
            dispatch(loginAciton(account.value,password.value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);