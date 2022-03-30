import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Routes from '../navigation/Routes';




// ---------------------------------Login Screen Stacks-------------------------------------------------------



const LoginStack = createNativeStackNavigator()

function LoginStackScreen(){
  return(
    <NavigationContainer>
    <LoginStack.Navigator>
      <LoginStack.Screen name = "Login" component={Login} options={{headerShown:false}}/>
      <LoginStack.Screen name = "SwiggyApp" component={Routes} options={{headerShown:false}}/>
    </LoginStack.Navigator></NavigationContainer>
  )
}

export default LoginStackScreen



// -------------------------Function for the login page Jsx and to navigate to Swiggy Home Page-------------------------------------- 
function Login({navigation}) {
  function show(){
    SheetManager.show("loginPage")

}

return (
  // ----------------------Login Page---------------------------------------
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text>Ready to order from top restaurants?</Text>
        <View style={{marginVertical:10}} ><Button title='SET DELIVERY LOCATION' color={"orange"} /></View>
        <TouchableOpacity onPress={show}  style={{flexDirection:"row"}}><View><Text>Have an account? </Text></View>
        <View><Text style={{ color: "orange" ,}}>Login</Text></View>
        </TouchableOpacity>

{/* ------------------------Action sheet on login page-------------------------------------------------- */}
        <ActionSheet id="loginPage">

            <View style={{height:"45%",margin:15}}>
            
       <Text style={{ fontWeight: "bold",color: "midnightblue",fontSize: 17,}}>LOGIN</Text>
       <Text>Enter your phone number to proceed</Text>
       <Text style={{fontSize:10,marginTop:10}}>10 digit mobile number</Text>
       <View style={{borderBottomColor:"orange",borderBottomWidth:2,}}>
       <TextInput placeholder='enter ten digit number' >+91 </TextInput>
       </View>
       <View  style={{marginTop:10}}>

{/* -----------------------------Button------------------------------- */}
       <Button title='CONTINUE' color={"orange"} onPress={()=> navigation.navigate('SwiggyApp')}></Button></View>
       
       
       <Text style={{fontSize:13,marginTop:15,textAlign:"center"}} >By clicking, I accept the Terms {`&`} Conditions {`&`} Privacy Policy</Text>
       </View>
       
       

        </ActionSheet>

    </View>
)
}
