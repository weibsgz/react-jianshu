import {SEARCH_FOCUSED,SEARCH_BLUR,
        INIT_HOTLIST_ACTION,
        MOUSE_IN,MOUSE_OUT,CHANGE_SWITCH} from './actionTypes'
const defaultState = {
    focused : false,
    mouseIn:false,  //鼠标引入搜索内容中
    hotList:[],
    page:1, //当前页
    totolPage:1  //总数据有多少页 这里先随便写当focused时候通过
    //actionCreator会通过Math.ceil(data.data.length / 10)计算有多少页传给reducer这里
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))  ;
    if(action.type === SEARCH_FOCUSED) {
       newState.focused = true
       return newState
    }
    if(action.type === SEARCH_BLUR) {
        newState.focused = false
       return newState
    }
    if(action.type === INIT_HOTLIST_ACTION) {
        newState.hotList = action.data;
        newState.totolPage = action.totalPage
        return newState
    }
    if(action.type === MOUSE_IN) {
        newState.mouseIn = true; 
        return newState
    }
    if(action.type === MOUSE_OUT) {
        newState.mouseIn = false; 
        return newState
    }
    if(action.type === CHANGE_SWITCH) {
        newState.page = action.page
    }

    return newState 
}