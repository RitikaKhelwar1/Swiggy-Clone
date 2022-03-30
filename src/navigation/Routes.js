import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SwiggyHome from '../Screens/Home'
import Search from '../Screens/Search'
import CartStackNavigator from '../Screens/Cart'
import {Image,TouchableHighlight} from 'react-native'
import Styling from '../styles/Styling'
import AccountScreen from '../Screens/AccountScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    
    <Tab.Navigator >
      {/* <--------------------Swiggy Home Screen---------------------------> */}
      <Tab.Screen name= "Swiggy" component={SwiggyHome} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={require('../assets/Images/Swiggy.png')} style={{height:25,width:25,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
      {/* <----------------------Search Tab Screen-------------------------> */}
      <Tab.Screen name="Search" component={Search} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={require('../assets/Images/Search.png')} style={{height:25,width:25,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
      {/* <-----------------------Cart Tab Screen-------------------------> */}
      <Tab.Screen name="Cart" component={CartStackNavigator} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={require('../assets/Images/bag.png')} style={{height:20,width:20,tintColor:focused?'black':'grey'}} ></Image>
        ),
        
        
      }}/>
      {/* <--------------------Account Tab Screen--------------------------> */}
      <Tab.Screen name="Account" component={AccountScreen} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={require('../assets/Images/user.png')} style={{height:17,width:17,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
    </Tab.Navigator>
   
  )
}


export default Routes