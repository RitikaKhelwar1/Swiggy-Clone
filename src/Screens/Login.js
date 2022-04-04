// import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import LoginSlider from '../components/LoginSlider';
import { useState } from 'react';
import { event } from 'react-native-reanimated';
import UserData from '../constants/UserData';
import {Naviagting} from '../navigation/Routes'




// -------------------------Function for the login page Jsx and to navigate to Swiggy Home Page-------------------------------------- 
function Login({navigation},props) {
  function show(){
    SheetManager.show("loginPage")
    
  }

  const [MobileNumber, setMobileNumber] = useState("")
  function Mobile(event){
    setMobileNumber(event.target.value)
  }
  
  return (
    
    // ----------------------Login Page---------------------------------------
    <View style={{flexDirection:"column",position:"absolute"}}>
   
      <LoginSlider/>
   
    <View style={{ justifyContent: 'flex-end', alignItems: "center" ,paddingVertical:20,flex:0.5}}>
        <Text>Ready to order from top restaurants?</Text>
        <View style={{marginVertical:10}} ><Button title='SET DELIVERY LOCATION' color={"orange"} /></View>
        <TouchableOpacity onPress={show}  style={{flexDirection:"row"}}><View><Text>Have an account? </Text></View>
        <View><Text style={{ color: "orange" ,}}>Login</Text></View>
        </TouchableOpacity>

{/* ------------------------Action sheet on login page-------------------------------------------------- */}
        <ActionSheet id="loginPage" bounceOnOpen={true} >

            <View style={{height:"45%",margin:15}}>
            
       <Text style={{ fontWeight: "bold",color: "midnightblue",fontSize: 17,}}>LOGIN</Text>
       <Text>Enter your phone number to proceed</Text>
       <Text style={{fontSize:10,marginTop:10}}>10 digit mobile number</Text>
       <View style={{borderBottomColor:"orange",borderBottomWidth:2,}}>
       <TextInput placeholder='enter ten digit number'onChange={Mobile}>+91 {MobileNumber}</TextInput>
       </View>
       <View  style={{marginTop:10}}>

{/* -----------------------------Button------------------------------- */}
       <Button  title="CONTINUE" color={"orange"}  ></Button></View>
       
       
       <Text style={{fontSize:13,marginTop:15,textAlign:"center"}} >By clicking, I accept the Terms {`&`} Conditions {`&`} Privacy Policy</Text>
       </View>
       
       

        </ActionSheet>

    </View>
    </View>
)
}

export default Login