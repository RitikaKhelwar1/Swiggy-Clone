import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Collapse,CollapseHeader, CollapseBody, AccordionList,} from 'accordion-collapse-react-native';
import Styling from '../styles/Styling';
import {Divider} from 'react-native-elements/dist/divider/Divider'
import {OneMemberShip} from './AccountStackScreenData'


function PaymentsRefund({navigation}) {
  return (

//Simple collapsable
<View>
<Collapse>
    <CollapseHeader>
   
      <View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={Styling.AccountFont}>Payements {`&`} Refunds</Text>
        <Text style={{fontSize:13}}>Refund Status {`&`} Payment Modes </Text>
      </View>
      
    </CollapseHeader>
    
    
    <CollapseBody>
    {/* <----------------Refund Status-----------------> */}
    <CollapseHeader>
   
    <TouchableOpacity onPress={()=>navigation.navigate('OneMemberShip')} ><View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
        <Text style={{fontSize:13}}>Refund Status</Text>
      </View></TouchableOpacity>
      
    </CollapseHeader>
    {/* <-------------------Payment Modes------------------> */}
    <CollapseHeader>
   
    <TouchableOpacity><View style={{padding:20,justifyContent:"center",borderBottomColor:"grey",borderBottomWidth:0.5}}>
     <Text style={{fontSize:13}}>Payment Modes</Text>
      </View></TouchableOpacity>
      
    </CollapseHeader>
   

    </CollapseBody>
</Collapse>
<Divider width={2}/>
</View>
  )
}

export default PaymentsRefund