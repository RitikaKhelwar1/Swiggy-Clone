import types from "../types";

const initialState = false;

const ContinueLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: return state = true;
        case types.USER_LOGOUT: return state = false;
        default: return state;
    }
}

export default ContinueLogin;