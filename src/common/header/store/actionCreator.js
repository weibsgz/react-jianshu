import {SEARCH_FOCUSED,SEARCH_BLUR} from './actionTypes'

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