 import React from "react"
 import{Text,View,TextInput,Button} from 'react-native'
 import {SettingStates} from "./AccountScreen"
 



//  <---------------Edit Details Screen in the Acoount Tab Screen------------------->
 export function EditDetails(){
    return(
      <View>
      <TextInput placeholder='enter your name' style={{borderWidth:1,borderColor:"black",marginBottom:10,borderRadius:5}}  ></TextInput>
      <TextInput placeholder='enter your phone no.'style={{borderWidth:1,borderColor:"black",marginBottom:10,borderRadius:5}}  ></TextInput>
      <TextInput placeholder='enter your e-mail address'style={{borderWidth:1,borderColor:"black",marginBottom:10,borderRadius:5}} ></TextInput>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
      <Button title='UPDATE' color='orange'></Button>
      </View>
      </View>
    )
  }