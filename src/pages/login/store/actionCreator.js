import {LOGIN,LOGOUT} from './actionTypes'
import axios from 'axios'
export const loginAciton = (account,password) => {
    return (dispatch)=>{
        axios.get('http://localhost:4000/api/login?account='+account + '&password='+password).then(res=>{
            const data = res.data.data;
            const action = {
                type:LOGIN ,
                data     
            };
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const logoutAction =()=>{
    return {
        type:LOGOUT,
        data:false
    }
}