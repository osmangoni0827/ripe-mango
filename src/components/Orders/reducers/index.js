import counterReducer from './counter'
import isLoggedReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    counter : counterReducer,
    logged : isLoggedReducer
})
export default allReducer;