import React from 'react'
import {Text,View,Image,Button,TextInput} from 'react-native'
import Styling from '../CSS/Styling'
import SwiggyHome from './Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

function EditDetails(){
  return(
    <View>
    <TextInput placeholder='enter your name'></TextInput>
    <TextInput placeholder='enter your phone no.'></TextInput>
    <TextInput placeholder='enter your e-mail address'></TextInput>
    </View>
  )
}

const AccountStack = createNativeStackNavigator();

// function for user details-------------------------->


function Account({navigation}) {
  
  let UserDetails = [
    {
      UserName:"Ritika",
      PhoneNumber:"1234567891",
      Email:"abc@gmail.com"
    }
  ] 
  
  return (
    <View style={Styling.GeneralComponent}>

      {/* <----- user details ----->*/}
      
      <View style={{flexDirection:"row",borderBottomWidth:2,borderBottomColor:"black",paddingVertical:25,}}>
      {/* user details */}

        <View style={{flex:0.7,}}>
        <Text style={Styling.font} >{UserDetails[0].UserName.toUpperCase()}</Text>
        <Text style={{marginLeft:10,marginTop:5}} >+91-{UserDetails[0].PhoneNumber} . {UserDetails[0].Email}</Text>
        </View>

        {/*button to edit user details*/}

        <View style={{flex:0.3,justifyContent:"center",alignItems:"flex-end"}}>
        <Button title='EDIT' color={"orange"} onPress={()=> navigation.navigate('EditDetails')} ></Button>
        </View>

      </View>
    </View>
  )
}




// <---------------------------------Main Screen for Account Tab------------------------------------------------->


function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={Account} options={{headerShown:false}} />
      <AccountStack.Screen name="EditDetails" component={EditDetails} />
    </AccountStack.Navigator>
  );
}
export default AccountStackScreen