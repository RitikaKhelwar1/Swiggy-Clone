import React from 'react'
import{ Text,View,FlatList,Image,TouchableOpacity} from 'react-native'
import Styling from '../styles/Styling'
import TopPick from './TopPick'

function SubComponent3() {
  return (
    <View>
       
      <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={TopPick} renderItem={(element)=>{
          return(
              <View style={{marginBottom:10}}>
              <TouchableOpacity><View style={{flexDirection:"row"}}>
        <Image style={Styling.SubComponent3Img} source={element.item.uri}></Image></View></TouchableOpacity>
        <Text  style={{textAlign:"center"}}>{element.item.text}</Text>
        </View>
          )
      }}
      ></FlatList>
    </View>
  )
}

export default SubComponent3