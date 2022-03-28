import React from 'react'
import { Text, View, Image, TouchableOpacity ,StatusBar,TouchableHighlight} from 'react-native'
import Styling from '../CSS/Styling'


 


function Header({navigation}) {
  return (
   <View style={{flexDirection:"row",borderBottomWidth:0.2,
   borderBottomColor:"grey"}}>
      <StatusBar barStyle='dark-content' backgroundColor={"transparent"}  ></StatusBar>
      <TouchableHighlight underlayColor={"whitesmoke"} onPress={()=> navigation.navigate('HomeLocation')} style={{flexDirection:'column',paddingHorizontal:10,paddingBottom:15,flex: 0.75 }}>
        <View >
      
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../Images/location.png')} style={[Styling.headerLogo]} ></Image>
          <Text style={Styling.font} >Home</Text>
        </View>
        <View style={{marginTop:5}}>
        <Text numberOfLines={1} style={{fontSize:12}}>Plot No. 5 Ch Devi Lal Center Of Learning and Education</Text>

        </View>
      


    </View></TouchableHighlight>
    <TouchableHighlight underlayColor={"whitesmoke"} onPress={()=> navigation.navigate('Offers')} style={{ flex: 0.25 ,paddingHorizontal:5,justifyContent:'center'}}><View style={{flexDirection:"row",alignItems:'center',alignContent:"center",justifyContent:"flex-end"}}>
        <Image source={require('../Images/offer.png')} style={[Styling.headerLogo,{marginRight:5}]} ></Image>
        <Text style={{fontWeight: "bold",color: "grey",fontSize: 17,marginRight:5}}>Offers</Text>
      </View></TouchableHighlight>
    </View>
    
  )
}





export default Header