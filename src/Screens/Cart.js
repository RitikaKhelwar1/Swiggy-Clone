import React from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'

import Styling from '../CSS/Styling'


function Cart() {
  return (
      <View style={{justifyContent:'center',alignItems:"center", flex:1}} >
  <Image source={require('../Images/Cart.jpeg')} style={{height:270,width:250}}></Image>
  <Text style={[Styling.font,{margin:10}]} >GOOD FOOD IS ALWAYS COOKING</Text>
  <Text>Your cart is empty</Text>
  <Text>Add something from the menu</Text>
  <TouchableOpacity><View style={{margin:25,borderColor:"orange",borderWidth:1}}>
      <Text style={{margin:10,color:"orange",marginHorizontal:15,fontWeight:"bold"}} >BROWSE RESTAURANTS</Text>
  </View></TouchableOpacity>

   </View>
  )
}

export default Cart