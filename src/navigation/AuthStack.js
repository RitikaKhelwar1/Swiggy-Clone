import React from 'react';
// import { useSelector } from 'react-redux';
// import LogingPage from '../Screen/loginPage/LogingPage';
// import Signuppage from '../Screen/signup/Signuppage';

// import navigationStrings from './navigationStrings';
import Login from '../Screens/Login';

export default function (Stack) {
    return (
        <>
           <Stack.Screen name = "Login" component={Login} options={{headerShown:false}}/>
        </>
    );
}