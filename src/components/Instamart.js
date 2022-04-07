import React from 'react'
import {Text,View,FlatList,Image,Button,TouchableOpacity} from 'react-native'
import ImagePath from '../constants/ImagePath'
import Styling from '../styles/Styling'

function Instamart() {
  return (
   <View>
       <TouchableOpacity><View style={Styling.InstaView1}>
            <View style={[Styling.Instamart,Styling.InstaView2]}>
                <Text style={Styling.IText1} >Instamart</Text>
                </View>
            <View style={[Styling.Instamart,Styling.InstaView2]} >
                <Text style={Styling.IText2}>GROCERY DELIVERED</Text>
                <Text style={Styling.IText3}>IN  M I N U T E S</Text>
            </View>
       </View></TouchableOpacity>
       <TouchableOpacity><View style={Styling.InstamartOff}>
            <Image source={ImagePath.InstamartOff} style={Styling.InstaImg} ></Image>
       </View></TouchableOpacity>
       <View></View>
       <View style={Styling.InstaBtn}>
           <Button title='Browse more on Instamart' color={"purple"}/>
       </View>
   </View>
  )
}

export default Instamart