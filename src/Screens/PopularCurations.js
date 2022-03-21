import React from 'react'
import {Text, Image, FlatList, View, ScrollView,Dimensions,TouchableOpacity} from 'react-native'
import Styling from '../CSS/Styling'
import TopPick from './TopPick'


function PopularCurations() {
  
  const numColumns = Math.ceil(TopPick.length / 2)
  return (
    <View style={Styling.Component4}>
      <View >
    <Text style={[Styling.font,{marginLeft:20}]}>Popular Curations</Text>
    </View>
    
    <FlatList 
    contentContainerStyle={{alignSelf:'flex-start'}}
    // numColumns={numColumns}
    showsHorizontalScrollIndicator={false}
    // showsVerticalScrollIndicator={false}
    horizontal={true} data={TopPick} renderItem={(element)=>{
      return(
        <View>
          <View>
            
        <TouchableOpacity><View>
          <Image source={element.item.uri} style={[Styling.SubComponent4Img,{margin:15}]}></Image></View>
          <View><Text style={{textAlign:"center"}}>{element.item.text}</Text></View>
          </TouchableOpacity></View>
        <View>
        <TouchableOpacity><View>
          <Image source={element.item.url} style={[Styling.SubComponent4Img,{margin:15,marginBottom:10}]}></Image></View>
        <View><Text style={{textAlign:"center",marginBottom:15}}>{element.item.text1}</Text></View>
        </TouchableOpacity></View>
        
        </View>
       
      )
    }}></FlatList>
   
    </View>
  )
}

export default PopularCurations;