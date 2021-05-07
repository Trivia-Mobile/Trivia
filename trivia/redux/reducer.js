import {combineReducers} from 'redux'

import {UPDATE_USER, UPDATE_QUESTION} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const questionReducer = (state = [], action) => {
    if(action.type === UPDATE_QUESTION){
        return [...state, action.payload]
    }
    return state
} 

const userReducer = (state = {}, action) => {
    switch(action.type){
        case UPDATE_USER:
            return merge(state, action.payload)
        default:
            return state
    } 
}

const reducer = combineReducers({
    user: userReducer,
    Question: questionReducer
})

export default reducer
