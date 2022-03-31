import React from 'react';
import {
  SafeAreaView,
 
} from 'react-native';
import Styling from './src/styles/Styling';
import Footer from './src/navigation/Tabs';
import Login from './src/Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';


const App = () => {
  
  return (

    <SafeAreaView style={Styling.MainContainer} >
      
     
     <Routes/>
      
      
      
    </SafeAreaView>

  )
}

export default App;
