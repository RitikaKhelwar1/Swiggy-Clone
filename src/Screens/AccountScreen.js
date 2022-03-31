import React from 'react'
import {Text,View,Image,Button,TextInput,TouchableOpacity} from 'react-native'
import Styling from '../styles/Styling'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditDetails,OneMemberShip,SwiggyMoney,Help, ManageAddress,Favourites } from '../components/AccountStackScreenData'
import PaymentsRefund from '../components/PaymentsRefund'
import MyAccount from '../components/MyAccount'
import {Collapse,CollapseHeader, CollapseBody, AccordionList,} from 'accordion-collapse-react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider'





// function for ACCOUNT screen-------------------------->


function AccountScreen({navigation}) {
  
  let UserDetails = [
    {
      UserName:"Ritika",
      PhoneNumber:"1234567891",
      Email:"abc@gmail.com"
    }]
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


{/* ---------------------------------------------accordion-collapse for Account Screen--------------------------------------------------------------- */}
{/* // <-------------------------------------------------My Account------------------------------------------------------------------> */}
<MyAccount navigation={navigation} />
  
{/* <----------------------------------------------------------payements and refunds---------------------------------------------------> */}
<PaymentsRefund navigation={navigation}/>

{/* <-----------------------------------------------------------one membership--------------------------------------------------------> */}
<View>
<Collapse>

    <CollapseHeader>
   <TouchableOpacity onPress={()=>navigation.navigate('OneMemberShip')}>
      <View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={{fontWeight: "bold",color: "indianred",fontSize: 20,}}>ONE <Text style={Styling.AccountFont}>membership</Text></Text>
        <Text style={{fontSize:13}}>Get unlimited Free Delivery {`&`} Extra Discounts with Swiggy One. Buy @ Rs75/month </Text>
      </View>
      </TouchableOpacity>
      
    <Divider width={2}/>
    </CollapseHeader>
    </Collapse>
    </View>

    {/* <---------------------------------------------------------Swiggy Money-----------------------------------------------------------> */}
    <View>
<Collapse>
    <CollapseHeader>
    <TouchableOpacity onPress={()=>navigation.navigate('SwiggyMoney')}>
      <View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={Styling.AccountFont}>Swiggy Money</Text>
        <Text style={{fontSize:13}}>View Acoount Balance {`&`} Transactions History</Text>
      </View></TouchableOpacity>
      
    <Divider width={2}/>
    </CollapseHeader>
    </Collapse>
    </View>
    {/* <------------------------------------------------------------help-----------------------------------------------------------------> */}
<View>
<Collapse>
    <CollapseHeader>
    <TouchableOpacity onPress={()=>navigation.navigate('Help')}>
      <View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={Styling.AccountFont}>Help</Text>
        <Text style={{fontSize:13}}>FAQs {`&`} Links</Text>
      </View></TouchableOpacity>
      
    <Divider width={2}/>
    </CollapseHeader>
    </Collapse>
    </View>




    </View>
  )
}





export default AccountScreen