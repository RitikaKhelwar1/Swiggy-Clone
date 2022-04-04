import React from 'react';
// import { useSelector } from 'react-redux';
// import LogingPage from '../Screen/loginPage/LogingPage';
// import Headcomponent from './TabNavigation'
// import { createStackNavigator } from '@react-navigation/stack'
// import Profile from '../Screen/ProfileScreen/Profilemains'
// import MenuScreen from '../Screen/menu/MenuScreen'
// import Search from '../Screen/search/Search'
import Tabs from './Tabs';

import HomeStack from './HomeStack';



export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Home" component={HomeStack} options={{headerShown:false}}/>
            
        </>
    );
}