import React from "react";
const initialState = false;

const ContinueLogin = (state = initialState, action) => {
    switch(action.type){
        case 'continue' : return state =  true;
        default : return state;
    }
}

export default ContinueLogin;