import React from 'react'
import { Text,View,Image,TouchableOpacity } from 'react-native'
import Styling from '../CSS/Styling'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SwiggyHome from './Home'
import UserProfile from './UserProfile'
import { NavigationContainer } from '@react-navigation/native';
import Instamart from './Instamart';
import Search from './Search'
import Food from './Food'
import Account from './Account'
import Cart from './Cart'
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    
    <Tab.Navigator >
      <Tab.Screen name= "Swiggy" component={SwiggyHome} options={{ 
        headerShown:false
      }}/>
      <Tab.Screen name="Search" component={Search} options={{ 
        headerShown:false
      }}/>
      <Tab.Screen name="Cart" component={Cart} options={{ 
        headerShown:false
      }}/>
      <Tab.Screen name="Account" component={Account} options={{ 
        headerShown:false
      }}/>
    </Tab.Navigator>
   
  )
}

export default Footer