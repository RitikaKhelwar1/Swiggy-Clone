import React from 'react'
import {Text,View,Image,Button,TextInput} from 'react-native'
import Styling from '../CSS/Styling'

function EditDetails({navigate}){
  return(
    <TextInput placeholder='enter your name'></TextInput>
  )
}

function Account() {

   let UserDetails = [
     {
       UserName:"Ritika",
       PhoneNumber:"1234567891",
       Email:"abc@gmail.com"
     }
   ] 
  
   return (
    <View style={Styling.GeneralComponent}>

      {/* user details */}
      
      <View style={{flexDirection:"row"}}>
      {/* user details */}

        <View style={{flex:0.7}}>
        <Text style={Styling.font} >{UserDetails[0].UserName.toUpperCase()}</Text>
        <Text>+91-{UserDetails[0].PhoneNumber} . {UserDetails[0].Email}</Text>
        </View>

        {/* button to edit user details */}
        <View style={{flex:0.3,justifyContent:"center",alignItems:"flex-end"}}>
        <Button title='EDIT' color={"orange"}></Button>
        </View>

      </View>
    </View>
  )
}

export default Account