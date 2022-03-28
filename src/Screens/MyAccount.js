import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Collapse,CollapseHeader, CollapseBody,} from 'accordion-collapse-react-native';
import Styling from '../CSS/Styling';
import {Divider} from 'react-native-elements/dist/divider/Divider'


function MyAccount({navigation}) {
  return (

// <-------------------------------------------------My Account------------------------------------------------------------------>
<View>
<Collapse  >
    <CollapseHeader>
   
      <View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={Styling.AccountFont}>My Account</Text>
        <Text style={{fontSize:13}}>Addresses, Favourites, Offers, {`&`} Settings </Text>
      </View>
      
    </CollapseHeader>
    
    
    <CollapseBody>
    {/* <----------------manage address-----------------> */}
    <CollapseHeader>
   
    <TouchableOpacity onPress={()=>navigation.navigate('ManageAddress')}><View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={{fontSize:13}}>Manage Address</Text>
      </View></TouchableOpacity>
      
    </CollapseHeader>
    {/* <-------------------Favourites------------------> */}
    <CollapseHeader>
   
    <TouchableOpacity onPress={()=> navigation.navigate('Favourites')} ><View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
     <Text style={{fontSize:13}}>Favourites</Text>
      </View></TouchableOpacity>
      
    </CollapseHeader>
    {/* <----------------Offers------------------------> */}
    <CollapseHeader>
   
    <TouchableOpacity><View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
      <Text style={{fontSize:13}}>Offers</Text>
      </View></TouchableOpacity>
      
    </CollapseHeader>
    {/* <------------------Settings---------------------> */}
    <CollapseHeader>
   
    <TouchableOpacity><View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
     <Text style={{fontSize:13}}>Settings</Text>
      </View></TouchableOpacity>
      
    </CollapseHeader>

    </CollapseBody>
</Collapse>
<Divider width={2}/>
</View>
  )
}

export default MyAccount