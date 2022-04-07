import React from 'react'
import { Text, View, Image, TouchableOpacity ,StatusBar,TouchableHighlight} from 'react-native'
import ImagePath from '../constants/ImagePath'
import Styling from '../styles/Styling'
import NavStr from "../navigation/NavigationStrings"


 


function Header({navigation}) {
  return (
   <View style={Styling.header}>
      <StatusBar barStyle='dark-content' backgroundColor={"transparent"}  ></StatusBar>
      <TouchableHighlight underlayColor={"whitesmoke"} onPress={()=> navigation.navigate(NavStr.HOME_LOCATION)} style={Styling.HomeLocation}>
        <View >
      
        <View style={{ flexDirection: 'row' }}>
          <Image source={ImagePath.location} style={[Styling.headerLogo]} ></Image>
          <Text style={Styling.font} >Home</Text>
        </View>
        <View style={{marginTop:5}}>
        <Text numberOfLines={1} style={{fontSize:12}}>Plot No. 5 Ch Devi Lal Center Of Learning and Education</Text>

        </View>
      


    </View></TouchableHighlight>
    <TouchableHighlight underlayColor={"whitesmoke"} onPress={()=> navigation.navigate(NavStr.OFFERS)} style={Styling.Offers}><View style={Styling.OffersView}>
        <Image source={ImagePath.offer} style={Styling.headerLogo} ></Image>
        <Text style={Styling.OffersText}>Offers</Text>
      </View></TouchableHighlight>
    </View>
    
  )
}





export default Header