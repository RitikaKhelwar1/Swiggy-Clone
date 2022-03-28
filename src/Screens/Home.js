import React from 'react'
import {Text, ScrollView,View} from 'react-native'
import Component2 from './Component2'
import Component3 from './Component3'
import SubComponent3 from './SubComponent3'
import PopularBrands from './PopularBrands'
import PopularCurations from './PopularCurations'
import Instamart from './Instamart'
import Component1 from './component1'
import Header from './header'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Offers,HomeLocation} from './HomeStackScreenData'
import {OneMemberShip} from './AccountStackScreenData'

function Home({navigation}) {
  return (
    <View style={{backgroundColor:"white"}}>
         <Header navigation={navigation}/>
  <ScrollView showsVerticalScrollIndicator={false} >
        <Component1 navigation={navigation}/>
        <Component2/>
        <Component3/>
        <SubComponent3/>
        <View style={{borderColor:"whitesmoke",borderBottomWidth:10,borderTopWidth:10 ,marginTop:10,}}>
         <PopularBrands/></View>
        <View style={{borderColor:"whitesmoke",borderBottomWidth:10 ,marginTop:10,}}>
         <PopularCurations/></View>
         <View style={{borderColor:"whitesmoke",borderBottomWidth:10 ,marginTop:10,}}>
         <Instamart/></View>
       

      </ScrollView> 
      </View>
  
  )
}

const HomeStack = createNativeStackNavigator()

function HomeStackScreen(){
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <HomeStack.Screen name="Offers" component={Offers}  />
    <HomeStack.Screen name="HomeLocation" component={HomeLocation} options={{headerShown:false}} />
    <HomeStack.Screen name="SwiggyOne" component={OneMemberShip}  />
  </HomeStack.Navigator>
  )
}

export default HomeStackScreen