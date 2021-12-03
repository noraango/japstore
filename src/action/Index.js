export const LOGIN_SUCCES="LOGIN_SUCCES"

export const setLoginSuccess=(loginSuccess,user)=>{
    return{
        type: LOGIN_SUCCES,
        loginSuccess,
        user
    }
}