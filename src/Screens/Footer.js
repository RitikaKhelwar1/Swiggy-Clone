import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SwiggyHome from './Home'
import Search from './Search'
import Account from './Account'
import Cart from './Cart'
import {Image,TouchableHighlight} from 'react-native'
import Styling from '../CSS/Styling'
import AccountStackScreen from './Account'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    
    <Tab.Navigator >
      <Tab.Screen name= "Swiggy" component={SwiggyHome} options={{ 
        headerShown:false,
        tabBarIcon:({focused})=>(
          <Image source={require('../Images/Swiggy.png')} style={{height:25,width:25,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
      <Tab.Screen name="Search" component={Search} options={{ 
        headerShown:false,
        tabBarIcon:({focused})=>(
          <Image source={require('../Images/Search.png')} style={{height:25,width:25,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
      <Tab.Screen name="Cart" component={Cart} options={{ 
        headerShown:false,
        tabBarIcon:({focused})=>(
          <Image source={require('../Images/bag.png')} style={{height:20,width:20,tintColor:focused?'black':'grey'}} ></Image>
        ),
        
        
      }}/>
      <Tab.Screen name="Account" component={AccountStackScreen} options={{ 
        headerShown:false,
        tabBarIcon:({focused})=>(
          <Image source={require('../Images/user.png')} style={{height:17,width:17,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
    </Tab.Navigator>
   
  )
}

export default Footer