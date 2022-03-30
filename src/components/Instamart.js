import React from 'react'
import {Text,View,FlatList,Image,Button,TouchableOpacity} from 'react-native'
import Styling from '../styles/Styling'

function Instamart() {
  return (
   <View>
       <TouchableOpacity><View style={{flexDirection:"row",borderBottomColor:"purple",borderBottomWidth:2}}>
            <View style={[{flex:0.5},Styling.Instamart,{alignItems:"flex-start",justifyContent:"flex-end"}]}>
                <Text style={{fontWeight:"bold",fontSize:30,color:"purple"}} >Instamart</Text>
                </View>
            <View style={[{flex:0.5},Styling.Instamart,{alignItems:"flex-end",justifyContent:"flex-end"}]} >
                <Text style={{color:"purple",fontSize:10}}>GROCERY DELIVERED</Text>
                <Text style={{color:"purple",fontWeight:"bold"}}>IN  M I N U T E S</Text>
            </View>
       </View></TouchableOpacity>
       <TouchableOpacity><View style={Styling.InstamartOff}>
            <Image source={require('../assets/Images/InstamartOff.png')} style={{width:400,borderRadius:15,height:180}} ></Image>
       </View></TouchableOpacity>
       <View></View>
       <View style={{marginTop:10,borderRadius:50,marginHorizontal:20,}}>
           <Button title='Browse more on Instamart' color={"purple"}/>
       </View>
   </View>
  )
}

export default Instamart