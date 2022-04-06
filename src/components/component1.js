import {Text, ScrollView, View, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import styling from '../styles/Styling'
import { NavigationContainer } from '@react-navigation/native'
import ImagePath from '../constants/ImagePath'

// food instamart and genie
//get unlimited offers

function Component1({navigation}) {
    
  return (
    <View>
   
     <TouchableOpacity style={styling.Component1} onPress={()=>navigation.navigate('SwiggyOne')}>
       <View style={[styling.GeneralComponent,styling.Component1View]}>
       <Image style={styling.Component1Image}source={ImagePath.one}></Image></View>
    <View style={styling.Component1View2}><Text style={styling.Component1Text}>Get unlimited benefits @ Rs75/month on Restaurants {`&`} Genie {`>>`} </Text>
    </View>
    </TouchableOpacity>
    <View style={styling.compo1}>
    <TouchableOpacity><Image source={ImagePath.Biriyani_bohvze} style={styling.SubComponent1Img}></Image><Text style={{textAlign:"center"}} >Food</Text></TouchableOpacity>
    <TouchableOpacity><Image source={ImagePath.Grocery_main_1218} style={styling.SubComponent1Img}></Image><Text style={{textAlign:"center"}}>Instamart</Text></TouchableOpacity>
    <TouchableOpacity><Image source={ImagePath.genie} style={styling.SubComponent1Img}></Image><Text style={{textAlign:"center"}}>Genie</Text ></TouchableOpacity>
   </View>
   </View>

  )
}

export default Component1

