import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer
})

export default rootReducer