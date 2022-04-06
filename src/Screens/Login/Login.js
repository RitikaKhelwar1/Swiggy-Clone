// import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import LoginSlider from '../../components/LoginSlider';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import {loginContinue} from "../../redux/actions/index"
import styles from './styles';





// -------------------------Function for the login page Jsx and to navigate to Swiggy Home Page-------------------------------------- 
function Login({navigation}) {

  const dispatch = useDispatch();
// ------------Phone number validations----------
  function userLogin(){
    const phoneRegex = /^[0-9]{10}$/
    if(phoneRegex.test(MobileNumber)){
      dispatch(loginContinue())
    }
    else{
      alert("Enter valid Phone number")
    }
  }
// -----------------------------------------------
  function show(){
    SheetManager.show("loginPage")
    
  }

  const [MobileNumber, setMobileNumber] = useState("")
  

  
  
  return (
    
    // ----------------------Login Page---------------------------------------
    <View style={styles.Login}>
   
      <LoginSlider/>
   
    <View style={styles.TextView}>
        <Text>Ready to order from top restaurants?</Text>
        <View  style={styles.BtnView}>
        <Button color={"#fa672d"} onPress={show} title='GET STARTED' ></Button>

        </View>
       

{/* ------------------------Action sheet on login page-------------------------------------------------- */}
        <ActionSheet id="loginPage" bounceOnOpen={true} >

            <View style={styles.ActionSheet}>
            
       <Text style={styles.Text1}>LOGIN</Text>
       <Text>Enter your phone number to proceed</Text>
       <Text style={styles.Text2}>10 digit mobile number</Text>
       <View style={styles.MobileNum}>
         <View><Text>+91 </Text></View>
       <View><TextInput placeholder='enter ten digit number' keyboardType="numeric" onChangeText={(event)=>setMobileNumber(event)}>{MobileNumber}</TextInput></View>
       </View>

{/* -----------------------------Button------------------------------- */}
       <View  style={styles.BtnView}>
      <Button  title="continue"  color={"#fa672d"}  onPress={userLogin} ></Button></View>
      <Text style={styles.BtnText} >By clicking, I accept the Terms {`&`} Conditions {`&`} Privacy Policy</Text>
       </View>
       
       

        </ActionSheet>

    </View>
    </View>
)
}

export default Login