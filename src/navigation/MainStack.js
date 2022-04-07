import React from 'react';
import NavStr from "./NavigationStrings"

import HomeStack from './HomeStack';



export default function (Stack) {
    return (
        <>
            <Stack.Screen name={NavStr.MAIN_HOME} component={HomeStack} options={{headerShown:false}}/>
            
        </>
    );
}