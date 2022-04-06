import types from "../types"

export const loginContinue = ()=>{
    return{
        type: types.LOGIN
    }
}

export const logout = ()=>{
    return{
        type: types.USER_LOGOUT
    }
}