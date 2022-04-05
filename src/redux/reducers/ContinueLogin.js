const initialState = false;

const ContinueLogin = (state = initialState, action) => {
    switch(action.type){
        case 'continue' : return state =  true;
        case 'logout' : return state = false;
        default : return state;
    }
}

export default ContinueLogin;