import React from 'react'
import Tabs from './Tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Offers,HomeLocation } from '../components/HomeStackScreenData';
import { EditDetails,ManageAddress, Favourites, SwiggyMoney, Help ,OneMemberShip} from '../components/AccountStackScreenData';
import NavStr from './NavigationStrings'

const Stack= createNativeStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavStr.HOME} component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name={NavStr.OFFERS} component={Offers}  />
      <Stack.Screen name={NavStr.HOME_LOCATION} component={HomeLocation} options={{headerBackButtonMenuEnabled:false,}} />
      <Stack.Screen name={NavStr.SWIGGY_ONE} component={OneMemberShip} />
      <Stack.Screen name={NavStr.EDIT_DETAILS} component={EditDetails} />
      <Stack.Screen name={NavStr.MANAGE_ADDRESSES} component={ManageAddress} />
      <Stack.Screen name={NavStr.FAVOURITES} component={Favourites} />
      <Stack.Screen name={NavStr.ONE_MEMBERSHIP} component={OneMemberShip} />
      <Stack.Screen name={NavStr.SWIGGY_MONEY} component={SwiggyMoney} />
      <Stack.Screen name={NavStr.HELP} component={Help} />
    </Stack.Navigator>
  )
}

export default HomeStack