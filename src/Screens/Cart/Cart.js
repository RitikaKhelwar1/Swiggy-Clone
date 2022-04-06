import React from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import Styling from '../../styles/Styling'
import ImagePath from '../../constants/ImagePath'
import styles from './styles'


function Cart({navigation}) {
  return (
      <View style={styles.Cart} >
  <Image source={ImagePath.Cart} style={styles.Image}></Image>
  <Text style={[Styling.font,styles.Text1]} >GOOD FOOD IS ALWAYS COOKING</Text>
  <Text>Your cart is empty</Text>
  <Text>Add something from the menu</Text>
  <TouchableOpacity onPress={()=>{navigation.navigate('Swiggy')}}><View style={styles.Btn}>
      <Text style={styles.BtnText} >BROWSE RESTAURANTS</Text>
  </View></TouchableOpacity>
  </View>
  )
}




export default Cart

