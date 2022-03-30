import React from 'react'
import { View, Text, FlatList, Image,TouchableOpacity} from 'react-native'
import Styling from '../styles/Styling'
import data from './data'

//offers in the app

function Component2() {
  return (
    <View style={[Styling.Component2]}>  
    <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={data} renderItem={(element)=>{
        return(
            <TouchableOpacity>
            <Image style={Styling.Component2Img} source={element.item.uri}></Image>
            </TouchableOpacity>
        )
    }} ></FlatList>
        </View>
  )
}

export default Component2