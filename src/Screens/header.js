import React from 'react'
import { Text, View, Image, TouchableOpacity ,StatusBar} from 'react-native'
import Styling from '../CSS/Styling'

function header() {
  return (
   <View>
      <StatusBar barStyle='dark-content' backgroundColor={"transparent"}  ></StatusBar>
    <View style={{flexDirection:'row',paddingHorizontal:10,paddingBottom:15,borderBottomWidth:0.2,
        borderBottomColor:"grey",}}>
      <View style={{ flex: 0.7 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../Images/location.png')} style={[Styling.headerLogo]} ></Image>
          <Text style={Styling.font} >Home</Text>
        </View>
        <View style={{marginTop:5}}>
        <Text numberOfLines={1} style={{fontSize:12}}>Plot No. 5 Ch Devi Lal Center Of Learning and Education</Text>

        </View>
      </View>

      <View style={{ flex: 0.3 ,alignItems:'flex-end',justifyContent:'flex-end',paddingHorizontal:5}}>
        <Image source={require('../Images/offer.png')} style={[Styling.headerLogo]} ></Image>
        <Text>Offers</Text>
      </View>

    </View>
    </View>
    
  )
}

export default header