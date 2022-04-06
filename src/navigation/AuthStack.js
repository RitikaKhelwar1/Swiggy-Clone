import React from 'react';
import Login from '../Screens/Login/Login';

export default function (Stack) {
    return (
        <>
           <Stack.Screen name = "Login" component={Login} options={{headerShown:false}}/>
        </>
    );
}