

// Action sheet to open the user account settings


import {React, useRef} from 'react'
import {Text,View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ActionSheet from "react-native-actionsheet"



function UserProfile() {
  let actionSheet = useRef()
let arratList = [
  "My Account",
  "Payments & Refunds",
  "ONE membership",
  "Swiggy Money",
  "Help",
  "Cancel"

]

const showActionSheet=()=>{
  actionSheet.current.show()
}
  return (
    <View>
    <TouchableOpacity onPress={showActionSheet}>
    <Text>UserProfile</Text>
    
    <ActionSheet
    ref={actionSheet}
    title={"User Account Settings"}
    options={arratList}
    cancelButtonIndex={5}
    destructiveButtonIndex={1}
    onPress={(index) => {
      alert(arratList[index]);}
    } />
   
    </TouchableOpacity>
    </View>
  )
}

export default UserProfile