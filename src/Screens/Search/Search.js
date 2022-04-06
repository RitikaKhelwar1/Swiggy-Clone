import React from 'react'
import {Text,View,TextInput,FlatList, ScrollView,VirtualizedList ,Image} from 'react-native'
import ImagePath from '../../constants/ImagePath'
import Styling from '../../styles/Styling'
import styles from './styles'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import data from './data'


function Search() {
  return (
   <View style={Styling.MainContainer}>
     
     {/* Search Bar in the Search Screen */}

     <View style={styles.Search}>
     <TextInput placeholder='Seach for restaurant, item or more' style={styles.TextInput}></TextInput>
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
       
       {/* Recent Searches */}
       < Divider width={2} color="whitesmoke"></Divider>
     <View style={styles.Searches}>
     
      <Text style={[Styling.font,styles.Text]}>Recent Searches</Text>
        <FlatList data={data}
        renderItem={(element)=>{
          return(
            <View style={styles.FlatListView}>
              <Image source={ImagePath.wallclock} style={Styling.headerLogo} ></Image>
              <Text  style={styles.FlatListText}>{element.item.search}</Text>
            </View>
          )
        }}
        numColumns={3}
        > </FlatList>
         </View>

        {/* Trending Searches */}
        < Divider width={10} color="whitesmoke"></Divider>

        <View style={styles.Searches}>
         <Text style={[Styling.font,styles.Text]}>Trending Searches</Text>
        <FlatList data={data}
        renderItem={(element)=>{
          return(
            <View style={styles.FlatListView}>
              <Image source={ImagePath.trend} style={Styling.headerLogo} ></Image>
              <Text style={styles.FlatListText} >{element.item.search}</Text>
            </View>
          )
        }}
        numColumns={3}
        > </FlatList>
         </View>

     </ScrollView>
     </View>
  )
}

export default Search