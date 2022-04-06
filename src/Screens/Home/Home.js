import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import Component2 from '../../components/Component2'
import Component3 from '../../components/Component3'
import SubComponent3 from '../../components/SubComponent3'
import PopularBrands from '../../components/PopularBrands'
import PopularCurations from '../../components/PopularCurations'
import Instamart from '../../components/Instamart'
import Component1 from '../../components/component1'
import Header from '../../components/header'
import styles from './styles'
import { Divider } from 'react-native-elements/dist/divider/Divider'


function Home({ navigation }) {
  return (
    <View style={styles.Home}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} >
        <Component1 navigation={navigation} />
        <Component2 />
        <Component3 />
        <SubComponent3 />
        < Divider width={10} color="whitesmoke"></Divider>
        <PopularBrands />
        <Divider width={10} color="whitesmoke" ></Divider>
        <PopularCurations />
        <Divider width={10} color="whitesmoke"></Divider>
        <Instamart />


      </ScrollView>
    </View>

  )
}



export default Home