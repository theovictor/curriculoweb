import { combineReducers } from 'redux';
import curriculoReducer from './curriculoReducer'
import userReducer from './userReducer'

export default combineReducers({
    curriculoReducer,
    userReducer,
})