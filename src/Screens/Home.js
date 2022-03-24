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

function Home() {
  return (
    <View style={{backgroundColor:"white"}}>
         <Header/>
  <ScrollView showsVerticalScrollIndicator={false} >
        <Component1 />
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