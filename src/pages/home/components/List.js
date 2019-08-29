import React,{Component,Fragment} from 'react'
import { connect } from 'react-redux';
import { getArticleList,getMoreListAction } from '../store/actionCreator'
import homeSty from '../home.module.scss'

import {Link} from 'react-router-dom'
class List extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.articleList.map((v,i)=>{
                        return (
                           <Link key={i} to={'/detail/' + v.id}>
                                <div  className={homeSty.listItem}>
                                    <img alt='' src={v.imgUrl}></img>
                                    <div className={homeSty.listInfo}>
                                        <h3>{v.title}</h3>
                                        <p>{v.desc}</p>
                                    </div>
                                </div> 
                           </Link>
                        )
                    })
                }
                <div  onClick={()=>{this.props.getMoreList(this.props.page)}}
                      className={homeSty.loadMore}>更多文字</div>  
            </Fragment>
        )
    }

     //初始化渲染异步数据
    componentDidMount() {
        this.props.handleArticleList()
    }

}

const mapStateToProps = (state) => {
    return {
        //用了combineReducers 所以多了一层header 
        articleList: state.home.articleList,
        page:state.home.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //发送action到reducer
        handleArticleList() {
            dispatch(getArticleList())
        } ,
        //加载跟多
        getMoreList(page) {
            dispatch(getMoreListAction(page))
        } 

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);