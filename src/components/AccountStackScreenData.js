 import React from "react"
 import{Text,View,TextInput,Button,Image} from 'react-native'
 import ImagePath from "../constants/ImagePath"

 



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

// <--------------------------Manage Address -------------------------------------->
export function ManageAddress(){
    return(
        <View >
            <Text style={{fontSize:20,fontWeight:"bold",color:"indianred"}} >I am ManageAddress screen</Text>
        </View>
    )
}


// <--------------------------Favourites -------------------------------------->
export function Favourites(){
    return(
        <View style={{justifyContent:"flex-start",alignItems:"center",backgroundColor:"white",flex:1}}>
            <Image source={ImagePath.Favourites} style={{height:200,width:200}} ></Image>
            <Text style={{fontSize:10,fontWeight:"bold",color:"gray"}} >WHERE IS THE LOVE?</Text>
            <Text style={{fontSize:10,fontWeight:"bold",color:"grey"}} >Once you Favourite a Restaurant it will appear here</Text>
        </View>
    )
}



// <--------------------------one membership -------------------------------------->
  export function OneMemberShip(){
      return(
          <View >
              <Text style={{fontSize:20,fontWeight:"bold",color:"indianred"}} >Buy One Membership @ Rs75/month and have more benefits</Text>
          </View>
      )
  }

  // <--------------------------Swiggy Money -------------------------------------->
  export function SwiggyMoney(){
    return(
        <View >
            <Text style={{fontSize:20,fontWeight:"bold",color:"indianred"}} >I am Swiggy Money screen</Text>
        </View>
    )
}

// <--------------------------Help  -------------------------------------->
export function Help(){
    return(
        <View >
            <Text style={{fontSize:20,fontWeight:"bold",color:"indianred"}} >Help Swiggy. its dying </Text>
        </View>
    )
}