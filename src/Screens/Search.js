import React from 'react'
import {Text,View,TextInput,FlatList, ScrollView,VirtualizedList ,Image} from 'react-native'
import Styling from '../CSS/Styling'

function Search() {
  const SearchData =[
    {
      key:"1",
      search:"La-Pino's Pizza"
    },
    {
      key:"2",
      search:"La-Pino's Pizza"
    },
    {
      key:"3",
      search:"La-Pino's Pizza"
    },
    {
      key:"4",
      search:"La-Pino's Pizza"
    },
    {
      key:"5",
      search:"La-Pino's Pizza"
    },
    {
      key:"6",
      search:"La-Pino's Pizza"
    },

  ]
  return (
   <View style={Styling.MainContainer}>
     <View style={{borderColor:"black",borderWidth:1,margin:10}}>
     <TextInput placeholder='Seach for restaurant, item or more' style={{padding:15}}></TextInput>
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{borderColor:"whitesmoke",borderBottomWidth:10,borderTopWidth:1.5 ,marginTop:10,paddingVertical:15}}>
         <Text style={Styling.font}>Recent Searches</Text>
        <FlatList data={SearchData}
        renderItem={(element)=>{
          return(
            <View style={{flex:1,flexDirection:"row",borderColor:"black",borderWidth:1,borderRadius:20,margin:10,padding:5}}>
              <Image source={require('../Images/wall-clock.png')} style={Styling.headerLogo} ></Image>
              <Text>{element.item.search}</Text>
            </View>
          )
        }}
        numColumns={3}
        >

        </FlatList>
         </View>
     </ScrollView>
     </View>
  )
}

export default Search