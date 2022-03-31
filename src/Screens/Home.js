import React from 'react'
import {Text, ScrollView,View} from 'react-native'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import SubComponent3 from '../components/SubComponent3'
import PopularBrands from '../components/PopularBrands'
import PopularCurations from '../components/PopularCurations'
import Instamart from '../components/Instamart'
import Component1 from '../components/component1'
import Header from '../components/header'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Offers,HomeLocation} from '../components/HomeStackScreenData'
import {OneMemberShip} from '../components/AccountStackScreenData'

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



export default Home