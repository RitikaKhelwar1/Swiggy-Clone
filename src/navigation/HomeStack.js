import React from 'react'
import Tabs from './Tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { Offers,HomeLocation } from '../components/HomeStackScreenData';
import { EditDetails,ManageAddress, Favourites, SwiggyMoney, Help ,OneMemberShip} from '../components/AccountStackScreenData';

const Stack= createNativeStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="Offers" component={Offers}  />
      <Stack.Screen name="HomeLocation" component={HomeLocation} options={{headerBackButtonMenuEnabled:false,headerTransparent:true,headerTitle:""}} />
      <Stack.Screen name="SwiggyOne" component={OneMemberShip} />
      <Stack.Screen name="EditDetails" component={EditDetails} />
      <Stack.Screen name="ManageAddress" component={ManageAddress} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="OneMemberShip" component={OneMemberShip} />
      <Stack.Screen name="SwiggyMoney" component={SwiggyMoney} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  )
}

export default HomeStack