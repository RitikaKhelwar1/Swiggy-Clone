import React from 'react';
import Login from '../Screens/Login/Login';
import NavStr from "./NavigationStrings"

export default function (Stack) {
    return (
        <>
           <Stack.Screen name = {NavStr.LOGIN} component={Login} options={{headerShown:false}}/>
        </>
    );
}