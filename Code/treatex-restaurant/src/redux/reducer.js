import DISHES from '../data/dishes'
import COMMENTS from '../data/Comments'
import {combineReducers}from 'redux'
import {initialContactForm} from './forms'
import {createForms} from 'react-redux-form'
import * as actiontypes from './actions'

const dishReducer = (dishState=DISHES,action)=>{
    switch(action.type){
    default:
     return dishState
    }
}

const commentReducer = (commentState=COMMENTS,action)=>{
    switch(action.type){
        case actiontypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            console.log(comment)
            return commentState.concat(comment)
        default:
            return commentState
    }
    
}
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: initialContactForm
    })
})