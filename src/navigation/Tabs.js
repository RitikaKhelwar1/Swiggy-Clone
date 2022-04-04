import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SwiggyHome from '../Screens/Home'
import Search from '../Screens/Search'
import Cart from '../Screens/Cart'
import {Image,} from 'react-native'
import AccountScreen from '../Screens/AccountScreen'
import ImagePath from '../constants/ImagePath'

const Tab = createBottomTabNavigator();

function Tabs({navigation}) {
  return (
    
    <Tab.Navigator >
      {/* <--------------------Swiggy Home Screen---------------------------> */}
      <Tab.Screen name= "Swiggy" component={SwiggyHome} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={ImagePath.Swiggy} style={{height:25,width:25,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
      {/* <----------------------Search Tab Screen-------------------------> */}
      <Tab.Screen name="Search" component={Search} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={ImagePath.Search} style={{height:25,width:25,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
      {/* <-----------------------Cart Tab Screen-------------------------> */}
      <Tab.Screen name="Cart" component={Cart} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={ImagePath.bag} style={{height:20,width:20,tintColor:focused?'black':'grey'}} ></Image>
        ),
        
        
      }}/>
      {/* <--------------------Account Tab Screen--------------------------> */}
      <Tab.Screen name="Account" component={AccountScreen} options={{ 
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarLabelStyle:{fontSize:13},
        tabBarActiveTintColor:'black',
        tabBarIcon:({focused})=>(
          <Image source={ImagePath.user} style={{height:17,width:17,tintColor:focused?'black':'grey'}} ></Image>
        )
      }}/>
    </Tab.Navigator>
   
  )
}


export default Tabs