import React from 'react'
import {Text,View,Image,Button,TextInput} from 'react-native'
import Styling from '../CSS/Styling'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditDetails } from './AccountStackScreenData'
import {useState} from 'react'




// function for ACCOUNT screen-------------------------->


function AccountStackScreen({navigation}) {


  let UserDetails = [
    {
      UserName:"Ritika",
      PhoneNumber:"1234567891",
      Email:"abc@gmail.com"
    }]
  


  const [UserName, setUserName] = useState(UserDetails[0].UserName)
  
  
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


{/* ---------------------------------------------accordion-collapse- for MY Account--------------------------------------------------------------- */}





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