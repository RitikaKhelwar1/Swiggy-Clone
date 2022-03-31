import React from 'react';
// import { useSelector } from 'react-redux';
// import LogingPage from '../Screen/loginPage/LogingPage';
// import Headcomponent from './TabNavigation'
// import { createStackNavigator } from '@react-navigation/stack'
// import Profile from '../Screen/ProfileScreen/Profilemains'
// import MenuScreen from '../Screen/menu/MenuScreen'
// import Search from '../Screen/search/Search'
import Tabs from './Tabs';
import Home from '../Screens/Home';
import { Offers,HomeLocation } from '../components/HomeStackScreenData';
import { EditDetails,ManageAddress, Favourites, SwiggyMoney, Help ,OneMemberShip} from '../components/AccountStackScreenData';



export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Home" component={Tabs} options={{headerShown:false}}/>
            <Stack.Screen name="Offers" component={Offers}  />
            <Stack.Screen name="HomeLocation" component={HomeLocation} options={{headerBackButtonMenuEnabled:false,headerTransparent:true,headerTitle:""}} />
            <Stack.Screen name="SwiggyOne" component={OneMemberShip} />
            <Stack.Screen name="EditDetails" component={EditDetails} />
            <Stack.Screen name="ManageAddress" component={ManageAddress} />
            <Stack.Screen name="Favourites" component={Favourites} />
            <Stack.Screen name="OneMemberShip" component={OneMemberShip} />
            <Stack.Screen name="SwiggyMoney" component={SwiggyMoney} />
            <Stack.Screen name="Help" component={Help} />
        </>
    );
}