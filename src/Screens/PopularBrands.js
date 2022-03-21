import React from 'react'
import {Text, Image, FlatList, View, ScrollView,Dimensions,TouchableOpacity} from 'react-native'
import Styling from '../CSS/Styling'
import TopPick from './TopPick'
import PopularBrandsData from './PopularBrandsData'
import BrandData from './BrandData'


function PopularBrands() {
  
//   const numColumns = Math.ceil(TopPick.length / 2)
  return (
    <View style={Styling.Component4}>
      <View >
    <Text style={[Styling.font,{marginLeft:20}]}>Popular Brands</Text>
    </View>
    
    <FlatList 
    contentContainerStyle={{alignSelf:'flex-start'}}
    // numColumns={numColumns}
    showsHorizontalScrollIndicator={false}
    // showsVerticalScrollIndicator={false}
    horizontal={true} data={BrandData} renderItem={(element)=>{
      return(
        <View>
    <View style={Styling.BrandCard2}>
        <View style={{flex:0.7,flexDirection:"row",justifyContent:"flex-end",borderBottomWidth:1,borderBottomColor:"grey"}}>
            <Image style={Styling.BrandCardImg} source={element.item.uri}></Image>
        </View>
        <View style={{flex:0.5,justifyContent:"flex-start",alignItems:"center"}}>
            <Text style={{fontWeight:"bold",textAlign:"center",fontSize:12}}>{element.item.off1}</Text>
            <Text style={{textAlign:"center",fontSize:8}}>{element.item.text1}</Text>
        </View>
    </View>
    <View style={[Styling.BrandCard2,{marginTop:20,marginBottom:15}]}>
        <View style={{flex:0.7,flexDirection:"row",justifyContent:"flex-end",borderBottomWidth:1,borderBottomColor:"grey"}} >
            <Image style={Styling.BrandCardImg} source={element.item.url}></Image>
        </View>
        <View style={{flex:0.5,justifyContent:"flex-start",alignItems:"center"}}>
            <Text style={{fontWeight:"bold",textAlign:"center",fontSize:12}}>{element.item.off2}</Text>
            <Text style={{textAlign:"center",fontSize:8}}>{element.item.text2}</Text>
        </View>
    </View>
    </View>
       
      )
    }}></FlatList>
   
    </View>
  )
}

export default PopularBrands;