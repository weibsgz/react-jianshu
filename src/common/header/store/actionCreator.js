import {SEARCH_FOCUSED,SEARCH_BLUR,
        INIT_HOTLIST_ACTION,MOUSE_IN,
        MOUSE_OUT,CHANGE_SWITCH} from './actionTypes'
import axios from 'axios'

export const searchFocused = () => {
    return {
        type : SEARCH_FOCUSED
    }
}

export const searchBlur = ()=>{
    return {
        type : SEARCH_BLUR
    }
}

export const mouseIn =()=>{
    return {
        type : MOUSE_IN
    }
}

export const mouseOut =()=>{
    return {
        type :MOUSE_OUT
    }
}

export const changeSwitch=(page)=>{
    return {
        type : CHANGE_SWITCH,
        page
    }
}



//使用redux-thunk 这里可以返回一个函数
export const getHotList = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:4000/api/headerHotList').then(res=>{
            const data = res.data;
            const action = {
                type:INIT_HOTLIST_ACTION,
                data:data.data,
                //这里需要个分页信息，每页显示10条
                totalPage: Math.ceil(data.data.length / 10)
            };
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}