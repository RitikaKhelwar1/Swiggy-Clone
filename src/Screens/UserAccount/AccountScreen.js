import React from 'react'
import {Text,View,Image,Button,TextInput,TouchableOpacity} from 'react-native'
import Styling from '../../styles/Styling'
import PaymentsRefund from '../../components/PaymentsRefund'
import MyAccount from '../../components/MyAccount'
import {Collapse,CollapseHeader, } from 'accordion-collapse-react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider'
import { useDispatch } from "react-redux"
import { logout } from '../../redux/actions/index'
import styles from './styles'




// function for ACCOUNT screen-------------------------->


function AccountScreen(props) {

  const dispatch = useDispatch()

  const {navigation,route}=props
  console.log("params",route)
  // const{userName,userMobile,userEmail} = route.params
  return (
    <View style={styles.Account}>

  

      {/* <----- user details ----->*/}
      
      <View style={styles.UserView}>
      {/* user details */}

        <View style={styles.DetailsView}>
        {/* <Text style={Styling.font}>{userName}</Text> */}
        {/* <Text numberOfLines={1} style={{marginLeft:10,marginTop:5}} >+91 {userMobile} . {userEmail}</Text> */}
        </View>

        {/*button to edit user details*/}

        <View style={styles.Btn}>
        <Button title='EDIT' color={"orange"} onPress={()=> navigation.navigate('EditDetails')}  ></Button>
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
      <View style={styles.GenView}>
        <Text style={styles.OneText1}>ONE <Text style={Styling.AccountFont}>membership</Text></Text>
        <Text style={styles.Text2}>Get unlimited Free Delivery {`&`} Extra Discounts with Swiggy One. Buy @ Rs75/month </Text>
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
      <View style={styles.GenView}>
        <Text style={Styling.AccountFont}>Swiggy Money</Text>
        <Text style={styles.Text2}>View Acoount Balance {`&`} Transactions History</Text>
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
      <View style={styles.GenView}>
        <Text style={Styling.AccountFont}>Help</Text>
        <Text style={styles.Text2}>FAQs {`&`} Links</Text>
      </View></TouchableOpacity>
      
    <Divider width={2}/>
    </CollapseHeader>
    </Collapse>
    </View>

    {/* <------------------------------------------------------------Log out-----------------------------------------------------------------> */}
<View>
<Collapse>
    <CollapseHeader>
    <TouchableOpacity onPress={()=>dispatch(logout())}>
      <View style={styles.GenView}>
        <Text style={Styling.AccountFont}>Log Out</Text>
      </View></TouchableOpacity>
      
    <Divider width={2}/>
    </CollapseHeader>
    </Collapse>
    </View>





    </View>
  )
}





export default AccountScreen