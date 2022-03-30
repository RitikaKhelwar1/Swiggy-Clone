import React from 'react';
import {
  SafeAreaView,
 
} from 'react-native';
import Styling from './src/styles/Styling';
import Footer from './src/navigation/Routes';
import Login from './src/Screens/Login';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  
  return (

    <SafeAreaView style={Styling.MainContainer} >
      
      {/* <----------Bottom Tabs-----------> */}
     <Login/>
      
      
      
    </SafeAreaView>

  )
}

export default App;
