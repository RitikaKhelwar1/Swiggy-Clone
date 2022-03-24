import React from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
// import DropdownMenu from 'react-native-dropdown-menu'
import Styling from '../CSS/Styling'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


function Cart({navigation}) {
  return (
      <View style={{justifyContent:'center',alignItems:"center", flex:1,backgroundColor:"white"}} >
  <Image source={require('../Images/Cart.jpeg')} style={{height:270,width:250}}></Image>
  <Text style={[Styling.font,{margin:10}]} >GOOD FOOD IS ALWAYS COOKING</Text>
  <Text>Your cart is empty</Text>
  <Text>Add something from the menu</Text>
  <TouchableOpacity onPress={()=>{navigation.navigate('Swiggy')}}><View style={{margin:25,borderColor:"orange",borderWidth:1}}>
      <Text style={{margin:10,color:"orange",marginHorizontal:15,fontWeight:"bold"}} >BROWSE RESTAURANTS</Text>
  </View></TouchableOpacity>
  </View>
  )
}


const Stack = createNativeStackNavigator()

function CartStackScreen(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="CartStackScreen" component={Cart} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}




export default CartStackScreen