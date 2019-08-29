import {GET_TOPIC_LIST,GET_ARTICLE_LIST,GET_MORE_ARTICLE_LIST} from './actionTypes'
import axios from 'axios'

export const getTopList = () => {
    return (dispatch)=>{
        axios.get('http://localhost:4000/api/topicList').then(res=>{
            const data = res.data;
            const action = {
                type:GET_TOPIC_LIST,
                data:data          
            };
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const getArticleList = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:4000/api/articleList').then(res=>{
            const data = res.data;
            const action = {
                type:GET_ARTICLE_LIST,
                data:data          
            };
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
//点击加载更多
export const getMoreListAction = (page)=>{
    return (dispatch)=>{
        axios.get('http://localhost:4000/api/getMoreList?page=' + page).then(res=>{
            const data = res.data;
            const action = {
                type:GET_MORE_ARTICLE_LIST,
                data:data,
                page:page + 1          
            };
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}