import React from 'react'
import {Text,View,Image,Button,TextInput} from 'react-native'
import Styling from '../CSS/Styling'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


function EditDetails(){
  return(
    <View>
    <TextInput placeholder='enter your name' style={{borderWidth:1,borderColor:"black",marginBottom:10,borderRadius:5}}></TextInput>
    <TextInput placeholder='enter your phone no.'style={{borderWidth:1,borderColor:"black",marginBottom:10,borderRadius:5}}></TextInput>
    <TextInput placeholder='enter your e-mail address'style={{borderWidth:1,borderColor:"black",marginBottom:10,borderRadius:5}}></TextInput>
    <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
    <Button title='UPDATE' color='orange'></Button>
    </View>
    </View>
  )
}


// function for ACCOUNT screen-------------------------->


function AccountStackScreen({navigation}) {
  
  let UserDetails = [
    {
      UserName:"Ritika",
      PhoneNumber:"1234567891",
      Email:"abc@gmail.com"
    }
  ] 
  
  return (
    <View style={{backgroundColor:"white"}}>

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

    {/* <----------------DropDown List--------------> */}

    <View>


    </View>


    </View>
  )
}




// <---------------------------------Main Screen for Account Tab------------------------------------------------->

const AccountStack = createNativeStackNavigator();

function AccountScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="AccountScreen" component={AccountStackScreen} options={{headerShown:false}} />
      <AccountStack.Screen name="EditDetails" component={EditDetails} />
    </AccountStack.Navigator>
  );
}
export default AccountScreen