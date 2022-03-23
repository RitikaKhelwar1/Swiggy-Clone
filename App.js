import React from 'react';
import {
  SafeAreaView,
 
} from 'react-native';
import Styling from './src/CSS/Styling';
import Footer from './src/Screens/Footer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (

    <SafeAreaView style={Styling.MainContainer} >
      {/* <----------Bottom Tabs-----------> */}
      <NavigationContainer>
      <Footer/>
      </NavigationContainer>
      
      
      
    </SafeAreaView>

  )
}

export default App;
