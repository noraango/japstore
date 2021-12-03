import {combineReducers} from 'redux'
import { LOGIN_SUCCES } from '../action'
const initAuthenticateStates={
    isLoginSuccess: false,
    user:{},
}
const AuthenticateReducer=(state= initAuthenticateStates, action)=>{
    switch(action.type){
        case LOGIN_SUCCES:
            return{
                ...state,
                user: action.user,
                isLoginSuccess: action  
                
            }
        default:
            return{
                ...state
            }
    }
}

export default combineReducers({
    authenticate: AuthenticateReducer,
})