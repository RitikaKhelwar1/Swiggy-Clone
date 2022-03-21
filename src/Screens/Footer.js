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

const Tab = createBottomTabNavigator();

function Footer() {
  return (

    <Tab.Navigator  >
      <Tab.Screen name= "Swiggyyy" component={SwiggyHome} options={{ 
        headerShown:false
      }}/>
      <Tab.Screen name="Food" component={Food} options={{ 
        headerShown:false
      }} />
      <Tab.Screen name='InstaMart' component={Instamart} options={{ 
        headerShown:false
      }}/>
      <Tab.Screen name="Search" component={Search} options={{ 
        headerShown:false
      }}/>
      <Tab.Screen name="Account" component={Account} options={{ 
        headerShown:false
      }}/>
    </Tab.Navigator>
  )
}

export default Footer