import React, { Component } from 'react'
import homeSty from '../home.module.scss'
import { connect } from 'react-redux';
import { getTopList } from '../store/actionCreator'
class Topic extends Component {
    render() {
        return (
            <div className={homeSty.topicWrapper}>
                {this.props.topicList.map(item => {
                    return (
                        <div key={item.id} className={homeSty.topicItem}>{item.title}</div>
                    )
                })}
            </div>
        )
    }
    //初始化渲染异步数据
    componentDidMount() {
        this.props.handleTopicList()
    }
}

const mapStateToProps = (state) => {
    return {
        //用了combineReducers 所以多了一层header 
        topicList: state.home.topicList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //发送action到reducer
        handleTopicList() {
            dispatch(getTopList())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Topic);