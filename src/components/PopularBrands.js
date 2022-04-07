import React from 'react'
import {Text, Image, FlatList, View, ScrollView,Dimensions,TouchableOpacity} from 'react-native'
import Styling from '../styles/Styling'
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
        <View style={Styling.BrandContainer}>
            <Image style={Styling.BrandCardImg} source={element.item.uri}></Image>
        </View>
        <View style={Styling.CardContainer}>
            <Text style={Styling.CardText}>{element.item.off1}</Text>
            <Text style={Styling.CardText2}>{element.item.text1}</Text>
        </View>
    </View>
    <View style={[Styling.BrandCard2,{marginTop:20,marginBottom:15}]}>
        <View style={Styling.CardImgContainer} >
            <Image style={Styling.BrandCardImg} source={element.item.url}></Image>
        </View>
        <View style={Styling.CardContainer}>
            <Text style={Styling.CardText}>{element.item.off2}</Text>
            <Text style={Styling.CardText2}>{element.item.text2}</Text>
        </View>
    </View>
    </View>
       
      )
    }}></FlatList>
   
    </View>
  )
}

export default PopularBrands;