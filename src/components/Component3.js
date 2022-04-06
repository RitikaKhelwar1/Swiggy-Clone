import React from 'react'
import {Text,View,Image} from 'react-native'
import ImagePath from '../constants/ImagePath'
import Styling from '../styles/Styling'

function Component3() {
  return (
    <View style={Styling.Component3}>
      <View style={{flex:0.05}} >
      <Image source={ImagePath.thumbsUp} style={Styling.headerLogo} ></Image>
      </View>
      <View style={{flex:0.8}}>
        <Text style={Styling.font}>Top Picks For You</Text>
        </View>
    </View>
    

  )
}

export default Component3