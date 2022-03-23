import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Component1 from './src/Screens/component1';
import Styling from './src/CSS/Styling';
import Component2 from './src/Screens/Component2';
import Header from './src/Screens/header'
import Component3 from './src/Screens/Component3';
import SubComponent3 from './src/Screens/SubComponent3';
import PopularCurations from './src/Screens/PopularCurations'
import PopularBrands from './src/Screens/PopularBrands';
import Instamart from './src/Screens/Instamart';
import Footer from './src/Screens/Footer';
import { NavigationContainer } from '@react-navigation/native';
import UserProfile from './src/Screens/UserProfile';

const App = () => {
  return (

    <SafeAreaView style={Styling.MainContainer} >
      
      <NavigationContainer>
      <Footer/>
      </NavigationContainer>
      
      
      
    </SafeAreaView>

  )
}

export default App;
