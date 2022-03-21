import {Text, ScrollView, View, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import styling from '../CSS/Styling'

// food instamart and genie
//get unlimited offers

function Home() {
    
  return (
    <View>
   
     <View style={[styling.Component1, {flexDirection:"row"}]}>
       <View style={[styling.GeneralComponent,{flex:0.2,justifyContent:"center",alignItems:"center"}]}>
       <Image style={styling.Component1Image}source={require('../Images/one.png')}></Image></View>
    <View style={{flex:0.8,justifyContent:"center",alignItems:"flex-start",}}><Text style={{fontSize:16}}>Get unlimited benefits @ Rs75/month on Restaurants {`&`} Genie {`>>`} </Text>
    </View>
    </View>
    <View style={styling.compo1}>
    <TouchableOpacity><Image source={require('../Images/Biriyani_bohvze.jpeg')} style={styling.SubComponent1Img}></Image><Text>Food</Text></TouchableOpacity>
    <TouchableOpacity><Image source={require('../Images/Grocery_main_1218.jpg')} style={styling.SubComponent1Img}></Image><Text>Instamart</Text></TouchableOpacity>
    <TouchableOpacity><Image source={require('../Images/genie.webp')} style={styling.SubComponent1Img}></Image><Text>Genie</Text></TouchableOpacity>
   </View>
   </View>

  )
}

export default Home

