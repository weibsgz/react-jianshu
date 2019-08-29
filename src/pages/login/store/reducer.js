import {LOGIN,LOGOUT} from './actionTypes'
const defaultState = {
    isLogin:false    
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))  ;
    switch(action.type) {
        case LOGIN:  
            newState.isLogin = action.data;  
            return newState; 
        case LOGOUT:  
            newState.isLogin = false;  
            return newState;     
        default:    
            return newState
    }


    
}