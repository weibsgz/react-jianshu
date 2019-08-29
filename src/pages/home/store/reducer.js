import {GET_TOPIC_LIST,GET_ARTICLE_LIST,GET_MORE_ARTICLE_LIST} from './actionTypes'
const defaultState = {
    topicList:[],
    articleList:[],
    page:1
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))  ;
    switch(action.type) {
        case GET_TOPIC_LIST :
            newState.topicList = action.data;
            return newState
        case GET_ARTICLE_LIST :
            newState.articleList = action.data;
            return newState;
        case GET_MORE_ARTICLE_LIST:
            newState.articleList = [...newState.articleList,...action.data];
            newState.page = action.page
            return newState
        default:
            return state
    }
    
}