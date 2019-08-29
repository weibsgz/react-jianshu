import React,{Component} from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

class Write extends Component {
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
}

const mapStateToProps = (state) => {
    return {
       isLogin:state.login.isLogin
    }
}


export default connect(mapStateToProps, null)(Write);