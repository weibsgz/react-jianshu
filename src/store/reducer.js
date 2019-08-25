import {combineReducers} from 'redux'

import HeaderReducer from '../common/header/store/reducer.js'

const Reducer = combineReducers({
    header:HeaderReducer
})

export default Reducer