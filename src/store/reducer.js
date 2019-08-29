import {combineReducers} from 'redux'

import HeaderReducer from '../common/header/store/reducer.js'
import HomeReducer from '../pages/home/store/reducer'
import LoginReducer from '../pages/login/store/reducer'

const Reducer = combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    login:LoginReducer
})

export default Reducer