import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js'



//redux devtools 谷歌开发者工具
// redux-thunk中间件使用
//https://github.com/zalmoxisus/redux-devtools-extension  1.2 Advanced store setup
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);


const store = createStore(reducer,enhancer)

export default store;